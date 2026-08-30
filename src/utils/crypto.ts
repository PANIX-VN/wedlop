/**
 * AES-256-GCM Encryption Layer for Web Lop 11A7
 *
 * Encrypts all localStorage data at rest using the Web Crypto API (built-in browser).
 * Key is derived from a site-specific passphrase + PBKDF2, with a random salt & IV per write.
 * No external library needed — 100% native and zero bundle overhead.
 *
 * Format stored: base64( salt[16] + iv[12] + ciphertext )
 */

const MASTER_PASSPHRASE = '11A7-PANIX-VN-SECURE-KEY-2026@HaAnh#Minh';

// Convert string → Uint8Array (UTF-8)
function strToBytes(str: string): Uint8Array {
  return new TextEncoder().encode(str);
}

// Convert Uint8Array → base64 string
function bytesToBase64(bytes: Uint8Array): string {
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

// Convert base64 string → Uint8Array
function base64ToBytes(b64: string): Uint8Array {
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

// Derive AES-256-GCM key from passphrase + salt using PBKDF2
async function deriveKey(salt: Uint8Array): Promise<CryptoKey> {
  const baseKey = await crypto.subtle.importKey(
    'raw',
    strToBytes(MASTER_PASSPHRASE).buffer as ArrayBuffer,
    { name: 'PBKDF2' },
    false,
    ['deriveKey']
  );

  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: salt.buffer as ArrayBuffer,
      iterations: 100_000,
      hash: 'SHA-256',
    },
    baseKey,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
}

/**
 * Encrypt a JSON-serializable value.
 * Returns a base64-encoded string (salt + iv + ciphertext).
 */
export async function encryptData(data: unknown): Promise<string> {
  if (typeof window === 'undefined') return JSON.stringify(data);

  try {
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const iv   = crypto.getRandomValues(new Uint8Array(12));
    const key  = await deriveKey(salt);

    const plaintext = strToBytes(JSON.stringify(data));
    const ciphertext = await crypto.subtle.encrypt(
      { name: 'AES-GCM', iv: iv.buffer as ArrayBuffer },
      key,
      plaintext.buffer as ArrayBuffer
    );

    // Pack: salt(16) | iv(12) | ciphertext
    const packed = new Uint8Array(salt.length + iv.length + ciphertext.byteLength);
    packed.set(salt, 0);
    packed.set(iv, 16);
    packed.set(new Uint8Array(ciphertext), 28);

    return bytesToBase64(packed);
  } catch {
    // Fallback to plain JSON if crypto fails (e.g. server-side)
    return JSON.stringify(data);
  }
}

/**
 * Decrypt a base64-encoded blob previously produced by encryptData.
 * Returns the original value, or null on failure.
 */
export async function decryptData<T = unknown>(blob: string): Promise<T | null> {
  if (typeof window === 'undefined') return null;

  try {
    const packed = base64ToBytes(blob);

    // Unpack: salt(16) | iv(12) | ciphertext(rest)
    const salt       = packed.slice(0, 16);
    const iv         = packed.slice(16, 28);
    const ciphertext = packed.slice(28);

    const key = await deriveKey(salt);

    const plaintext = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv: iv.buffer as ArrayBuffer },
      key,
      ciphertext.buffer as ArrayBuffer
    );

    return JSON.parse(new TextDecoder().decode(plaintext)) as T;
  } catch {
    return null;
  }
}

/**
 * Synchronous FAST XOR obfuscation for use when async crypto is inconvenient.
 * Provides a lightweight second layer on top of AES for all plain reads.
 * XOR is deterministic — same key always produces same output.
 */
const XOR_KEY = 'LOPHOC11A7@2026#PANIXVN';

export function xorObfuscate(input: string): string {
  let result = '';
  for (let i = 0; i < input.length; i++) {
    result += String.fromCharCode(
      input.charCodeAt(i) ^ XOR_KEY.charCodeAt(i % XOR_KEY.length)
    );
  }
  return btoa(result);
}

export function xorDeobfuscate(input: string): string {
  try {
    const raw = atob(input);
    let result = '';
    for (let i = 0; i < raw.length; i++) {
      result += String.fromCharCode(
        raw.charCodeAt(i) ^ XOR_KEY.charCodeAt(i % XOR_KEY.length)
      );
    }
    return result;
  } catch {
    return input; // fallback: return as-is if not obfuscated
  }
}

/**
 * Helper: save to localStorage with AES-256-GCM + XOR double encryption.
 */
export async function setEncrypted(key: string, value: unknown): Promise<void> {
  if (typeof window === 'undefined') return;
  try {
    const aesBlob = await encryptData(value);
    const doubleLayer = xorObfuscate(aesBlob);
    localStorage.setItem(key, doubleLayer);
  } catch {
    // Fallback to plain JSON if encryption fails
    localStorage.setItem(key, JSON.stringify(value));
  }
}

/**
 * Helper: read from localStorage and decrypt AES-256-GCM + XOR double layer.
 * Falls back to plain JSON parse for legacy unencrypted data.
 */
export async function getEncrypted<T = unknown>(key: string): Promise<T | null> {
  if (typeof window === 'undefined') return null;
  try {
    const stored = localStorage.getItem(key);
    if (!stored) return null;

    // Try double-layer decrypt (XOR outer → AES inner)
    try {
      const aesBlob = xorDeobfuscate(stored);
      const result = await decryptData<T>(aesBlob);
      if (result !== null) return result;
    } catch {}

    // Fallback: try plain JSON (legacy data before encryption was added)
    try {
      return JSON.parse(stored) as T;
    } catch {}

    return null;
  } catch {
    return null;
  }
}
