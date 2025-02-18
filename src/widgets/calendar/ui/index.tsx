import module from "./calendar.module.css";

import { DateCard, DateControl, DateHeader } from "@/features/calendar";

import { useDate } from "@/shared/hooks";
import { calendarSlice, validSameDate, validSameMonth, DAYS } from "@/shared/utils";

export function Calendar() {
  const [date, calendar, rows, onPrev, onNext, getToday] = useDate();

  return (
    <div className={module.container}>
      <div className={module.wrapper}>
        <DateControl
          onPrev={onPrev}
          date={`${date.year}년 ${date.month}월`}
          onNext={onNext}
          getToday={getToday}
        />
        {/* To do: 버튼 컨트롤 features 분류 필요 */}
        <table>
          <thead>
            <tr>
              {Object.keys(DAYS).map((_, day) => (
                <DateHeader day={day} />
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((_, i) => (
              <tr className={module.row} key={i}>
                {calendarSlice(calendar, i).map((cal) => (
                  <DateCard
                    key={`${cal.month}_${cal.date}`}
                    {...cal}
                    isSameDate={validSameDate(cal)}
                    isSameMonth={validSameMonth(date, cal)}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
