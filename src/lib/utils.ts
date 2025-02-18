import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Converts duration (years, months, days) to seconds.
 *
 * @param days - Number of days
 * @param months - Number of months
 * @param years - Number of years
 * @returns Total seconds
 */
export const durationToSeconds = (
  days: number = 0,
  months: number = 0,
  years: number = 0
): number => {
  const secondsInDay = 86400; // 24 * 60 * 60
  const secondsInMonth = 30 * secondsInDay; // Approximate month as 30 days
  const secondsInYear = 365 * secondsInDay;

  return days * secondsInDay + months * secondsInMonth + years * secondsInYear;
};
