import { useEffect, useState } from "react";

import { getCalendar, Today } from "@/shared/utils";

export function useDate(): [Today, Calendar[], number[], () => void, () => void] {
  const [date, setDate] = useState(new Today());
  const [calendar, setCalendar] = useState<Calendar[]>([]);

  const onPrev = () => {
    let year = date.year;
    let month = date.month - 1;

    if (date.month - 1 <= 0) {
      year -= 1;
      month = 12;
    }

    setDate((date) => ({ ...date, year, month }));
    setCalendar(getCalendar(year, month));
  };

  const onNext = () => {
    let year = date.year;
    let month = date.month + 1;

    if (date.month + 1 > 12) {
      year += 1;
      month = 1;
    }

    setDate((date) => ({ ...date, year, month }));
    setCalendar(getCalendar(year, month));
  };

  useEffect(() => {
    const today = new Today();
    setCalendar(getCalendar(today.year, today.month));
  }, []);

  return [date, calendar, Array(6).fill(0), onPrev, onNext];
}
