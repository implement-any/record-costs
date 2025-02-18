import module from "./date-control.module.css";

import { Button } from "@/shared/components/button";
import { DateControlProps } from "@/features/calendar/model/types";

export function DateControl({ onPrev, date, onNext, getToday }: DateControlProps) {
  return (
    <div className={module.container}>
      <div className={module.leftSide}>
        <h1 className={module.date}>{date}</h1>
      </div>
      <div className={module.rightSide}>
        <Button className={`${module.arrow} ${module.left}`} onHandle={onPrev} text="" />
        <Button className={module.today} onHandle={getToday} text="오늘" />
        <Button className={`${module.arrow} ${module.right}`} onHandle={onNext} text="" />
      </div>
    </div>
  );
}
