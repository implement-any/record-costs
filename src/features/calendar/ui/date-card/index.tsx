import module from "./date-card.module.css";

import { DateCardProps } from "@/features/calendar/model";

export function DateCard({
  year,
  month,
  date,
  day,
  isWeekend,
  isSameDate,
  isSameMonth,
}: DateCardProps) {
  const onClick = () => {
    alert(`${year}년 ${month}월 ${date}일 ${day}`);
  };

  return (
    <td
      className={`${module.card} ${isSameMonth ? (isWeekend ? module.weekend : "") : module.other}`}
      onClick={onClick}
    >
      <span className={`${module.text} ${isSameDate ? module.mark : ""}`}>
        {`${date === 1 ? `${month}월 ` : ""}${String(date).padStart(2, "0")}`}일
      </span>
    </td>
  );
}
