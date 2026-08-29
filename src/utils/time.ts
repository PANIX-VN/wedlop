/**
 * Time utility module enforcing Vietnam Local Time (Asia/Ho_Chi_Minh - GMT+7)
 * across all date calculations in the Class 11A7 web application.
 */

export function getVietnamTodayString(): string {
  try {
    const formatter = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Asia/Ho_Chi_Minh',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    return formatter.format(new Date()); // YYYY-MM-DD
  } catch (e) {
    const now = new Date();
    const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
    const vnTime = new Date(utcTime + 7 * 3600000);
    return vnTime.toISOString().split('T')[0];
  }
}

export function formatVietnamDateDisplay(dateStr: string): string {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  return dateStr;
}

export function getVietnam14DaysList() {
  const vnTodayStr = getVietnamTodayString();
  const todayVnDate = new Date(vnTodayStr + 'T00:00:00');
  const dayNames = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];

  const list: { dateStr: string; dayName: string; isToday: boolean }[] = [];

  for (let i = -7; i <= 6; i++) {
    const d = new Date(todayVnDate);
    d.setDate(todayVnDate.getDate() + i);

    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const dateStr = `${year}-${month}-${day}`;
    const dayName = dayNames[d.getDay()];

    list.push({
      dateStr,
      dayName,
      isToday: dateStr === vnTodayStr,
    });
  }

  return list;
}

export function getVietnamCutoffDateString(daysBack: number = 14): string {
  const vnTodayStr = getVietnamTodayString();
  const d = new Date(vnTodayStr + 'T00:00:00');
  d.setDate(d.getDate() - daysBack);

  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
