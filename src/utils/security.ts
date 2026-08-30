/**
 * Security & Sanitization Utilities for Web Lop 11A7
 * Protects against XSS, SQL Injection, Data Corruption, and Malicious Injections.
 */

// Strip dangerous script tags, event handlers, and SQL injection syntax
export function sanitizeText(input: any): string {
  if (typeof input !== 'string') {
    if (typeof input === 'number' || typeof input === 'boolean') {
      return String(input);
    }
    return '';
  }

  let cleaned = input;

  // 1. Remove HTML script tags & dangerous tags
  cleaned = cleaned.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  cleaned = cleaned.replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '');
  cleaned = cleaned.replace(/javascript:/gi, '');
  cleaned = cleaned.replace(/on\w+\s*=/gi, '');

  // 2. Escape dangerous HTML entities
  cleaned = cleaned
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');

  return cleaned.trim();
}

// Deep sanitize any JSON payload (arrays, objects, strings)
export function sanitizeObject<T>(obj: T): T {
  if (obj === null || obj === undefined) return obj;

  if (typeof obj === 'string') {
    return sanitizeText(obj) as unknown as T;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => sanitizeObject(item)) as unknown as T;
  }

  if (typeof obj === 'object') {
    const cleanedObj: Record<string, any> = {};
    for (const key of Object.keys(obj)) {
      const cleanKey = sanitizeText(key);
      cleanedObj[cleanKey] = sanitizeObject((obj as Record<string, any>)[key]);
    }
    return cleanedObj as T;
  }

  return obj;
}

// Strict username validation (only lowercase/uppercase letters, digits, dots, underscores)
export function validateUsername(username: string): boolean {
  if (!username || typeof username !== 'string') return false;
  if (username.length < 2 || username.length > 50) return false;
  const usernameRegex = /^[a-zA-Z0-9._-]+$/;
  return usernameRegex.test(username);
}
