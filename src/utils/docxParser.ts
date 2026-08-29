import mammoth from 'mammoth';
import { RuleItem } from '../data/types';

export async function parseDocxRules(file: File): Promise<RuleItem[]> {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.extractRawText({ arrayBuffer });
    const text = result.value;

    const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
    const rules: RuleItem[] = [];

    let currentCategory = 'Khác';
    let isMeritSection = false;

    lines.forEach((line, index) => {
      if (line.includes('ĐIỂM TRỪ')) {
        isMeritSection = false;
        return;
      }
      if (line.includes('ĐIỂM CỘNG')) {
        isMeritSection = true;
        return;
      }
      if (['Chuyên cần', 'Học tập', 'Nề nếp', 'Ứng xử', 'Cán bộ lớp', 'Khác'].includes(line)) {
        currentCategory = line;
        return;
      }

      // Check if line contains score pattern like "-5/lần", "+3/lần", "-10/bài", "+10/tuần"
      const scoreMatch = line.match(/([+-]?\d+)\s*\/\s*(\w+)/);
      if (scoreMatch) {
        const rawPoints = parseInt(scoreMatch[1], 10);
        const points = isMeritSection ? Math.abs(rawPoints) : (rawPoints > 0 ? -rawPoints : rawPoints);
        const unit = scoreMatch[2] || 'lần';
        const title = line.replace(scoreMatch[0], '').trim();

        if (title) {
          rules.push({
            id: `docx-${Date.now()}-${index}`,
            category: currentCategory,
            title: title,
            points: points,
            unit: unit,
          });
        }
      }
    });

    return rules;
  } catch (error) {
    console.error('Error parsing docx file:', error);
    throw error;
  }
}
