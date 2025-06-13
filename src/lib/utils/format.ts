/**
 * Returns a date converted to a formatted string.
 * @param date - Date to format.
 * @returns Formatted date.
 */
export const formatDate: {
  (date: string): string | null;
  (date: Date): string | null;
} = (arg) => {
  const date = typeof arg === 'string' ? new Date(arg) : arg;

  if (isNaN(date.getTime())) {
    return null;
  }

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};
