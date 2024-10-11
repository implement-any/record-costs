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
      className={module.card}
      style={{
        backgroundColor: isWeekend ? "#282826" : "",
        color: isSameMonth ? "" : "#9e9e9d",
      }}
      onClick={onClick}
    >
      <span className={`${module.text} ${isSameDate ? module.mark : ""}`}>
        {`${date === 1 ? `${month}월 ` : ""}${date}`}일
      </span>
    </td>
  );
}
