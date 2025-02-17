import module from "./date-control.module.css";

import { Button } from "@/shared/components/button";
import { DateControlProps } from "@/features/calendar/model/types";

export function DateControl({ onPrev, date, onNext }: DateControlProps) {
  return (
    <div className={module.container}>
      <Button className={`${module.arrow} ${module.left}`} onHandle={onPrev} text="" />
      <h1 className={module.date}>{date}</h1>
      <Button className={`${module.arrow} ${module.right}`} onHandle={onNext} text="" />
    </div>
  );
}
