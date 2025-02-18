/**
 * Converts days into a readable format like "1 year 2 months 3 days"
 * @param days Number of days
 * @returns Formatted duration string
 */
export const formatDuration = (days: number): string => {
  const years = Math.floor(days / 365);
  const months = Math.floor((days % 365) / 30);
  const remainingDays = days % 30;

  const result = [];
  if (years > 0) result.push(`${years} ${years === 1 ? "year" : "years"}`);
  if (months > 0) result.push(`${months} ${months === 1 ? "month" : "months"}`);
  if (remainingDays > 0)
    result.push(`${remainingDays} ${remainingDays === 1 ? "day" : "days"}`);

  return result.length > 0 ? result.join(" ") : "0 days";
};
