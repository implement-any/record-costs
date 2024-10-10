enum Day {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
}

export const DAYS: { [key in Day]: string } = {
  [Day.SUNDAY]: "일요일",
  [Day.MONDAY]: "월요일",
  [Day.TUESDAY]: "화요일",
  [Day.WEDNESDAY]: "수요일",
  [Day.THURSDAY]: "목요일",
  [Day.FRIDAY]: "금요일",
  [Day.SATURDAY]: "토요일",
};

export function getMaxDate(year: number, month: number) {
  return new Date(year, month, 0).getDate();
}

export function getDates(size: number) {
  return new Array(size).fill(0).map((_, i) => i + 1);
}

export function getDay(year: number, month: number, date: number) {
  const day = new Date(year, month - 1, date).getDay() as Day;
  return DAYS[day];
}

export function validWeekend(day: string): boolean {
  return day === DAYS[Day.SUNDAY] || day === DAYS[Day.SATURDAY];
}

export function getOptions(year: number, month: number, date: number) {
  const day = getDay(year, month, date);
  const isWeekend = validWeekend(day);
  return { date, day, isWeekend };
}

export function getCalendar(year: number, month: number) {
  const maxDate = getMaxDate(year, month);
  const dates = getDates(maxDate);
  return dates.map((date) => getOptions(year, month, date));
}
