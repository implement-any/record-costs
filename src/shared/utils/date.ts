enum DAY {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
}

export const DAYS: { [key in DAY]: string } = {
  [DAY.SUNDAY]: "일요일",
  [DAY.MONDAY]: "월요일",
  [DAY.TUESDAY]: "화요일",
  [DAY.WEDNESDAY]: "수요일",
  [DAY.THURSDAY]: "목요일",
  [DAY.FRIDAY]: "금요일",
  [DAY.SATURDAY]: "토요일",
};

export function getCalendarDate(month: number) {
  const year = new Date().getFullYear();
  return new Date(year, month, 0).getDate();
}

export function getDates(size: number) {
  return new Array(size).fill(0).map((_, i) => i + 1);
}

export function getDay(month: number, date: number) {
  const year = new Date().getFullYear();
  const day = new Date(year, month - 1, date).getDay() as DAY;
  return DAYS[day];
}

export function getCalendarArr(month: number) {
  return getDates(getCalendarDate(month));
}

export function isWeekend(month: number, date: number) {
  const year = new Date().getFullYear();
  const day = new Date(year, month - 1, date).getDay() as DAY;
  return day === DAY.SUNDAY || day === DAY.SATURDAY;
}

(() => {
  const month = 9;
  const dates = getCalendarArr(month);

  console.log(
    dates.map((date) => ({
      date,
      day: getDay(month, date),
      isWeekend: isWeekend(month, date),
    }))
  );
})();
