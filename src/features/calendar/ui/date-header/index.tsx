import { ABBR_DAYS } from "@/shared/utils";

import type { DateHeaderProps } from "@/features/calendar/model";

export function DateHeader({ day }: DateHeaderProps) {
  return <th>{ABBR_DAYS[day]}</th>;
}
