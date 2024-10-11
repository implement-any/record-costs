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

export class Today {
  year: number;
  month: number;
  date: number;

  constructor() {
    this.year = new Date().getFullYear();
    this.month = new Date().getMonth() + 1;
    this.date = new Date().getDate();
  }
}

export function getMaxDate(year: number, month: number) {
  return new Date(year, month, 0).getDate();
}

export function getDates<F extends (v: number, i: number) => number>(
  size: number,
  fill?: number,
  formatting?: F
) {
  return new Array(size).fill(fill ?? 0).map(formatting ? formatting : (_, i) => i + 1);
}

export function getDay(year: number, month: number, date: number) {
  const day = new Date(year, month - 1, date).getDay() as Day;
  return DAYS[day];
}

export function validWeekend(day: string): boolean {
  return day === DAYS[Day.SUNDAY] || day === DAYS[Day.SATURDAY];
}

export function getPrevDates(year: number, month: number) {
  const maxDate = getMaxDate(year, month - 1);
  const start = new Date(year, month - 1, 1).getDay();
  return getDates(start, maxDate, (v, i) => v - start + (i + 1));
}

export function getThisDates(year: number, month: number) {
  const maxDate = getMaxDate(year, month);
  return getDates(maxDate);
}

export function getNextDates(year: number, month: number) {
  const maxDate = getMaxDate(year, month);
  const end = new Date(year, month - 1, maxDate).getDay();
  return getDates(Math.abs(end - 13));
}

export function calendarSlice(calendar: Calendar[], index: number) {
  return calendar.slice(index * 7, (index + 1) * 7);
}

export function validSameDate(calendarDate: Calendar) {
  const today = new Today();
  const isSameYear = today.year === calendarDate.year;
  const isSameMonth = today.month === calendarDate.month;
  const isSameDate = today.date === calendarDate.date;
  return [isSameYear, isSameMonth, isSameDate].every((v) => v);
}

export function validSameMonth(stateDate: Today, calendarDate: Calendar) {
  return stateDate.month === calendarDate.month;
}

export function convertAPI(year: number, month: number, date: number) {
  if (month > 12) {
    year += 1;
    month = 1;
  } else if (month <= 0) {
    year -= 1;
    month = 12;
  }

  const day = getDay(year, month, date);
  const isWeekend = validWeekend(day);
  return { year, month, date, day, isWeekend };
}

export function getCalendar(year: number, month: number) {
  const prevDates = getPrevDates(year, month);
  const prevCalendar = prevDates.map((date) => convertAPI(year, month - 1, date));

  const thisDates = getThisDates(year, month);
  const thisCalendar = thisDates.map((date) => convertAPI(year, month, date));

  const nextDates = getNextDates(year, month);
  const nextCalendar = nextDates.map((date) => convertAPI(year, month + 1, date));

  return [...prevCalendar, ...thisCalendar, ...nextCalendar];
}
