import type { Day } from "@/shared/utils";

export type DateCardProps = {
  year: number;
  month: number;
  date: number;
  day: string;
  isWeekend: boolean;
  isSameDate: boolean;
  isSameMonth: boolean;
};

export type DateHeaderProps = {
  day: Day;
};

export type DateControlProps = {
  onPrev: () => void;
  date: string;
  onNext: () => void;
};
