/**
 * Returns a date converted to a formatted string.
 * @param date - Date to format.
 * @returns Formatted date, or null if the date is invalid.
 */
export const formatDate = (date: Date | string): null | string => {
  const parsedDate = typeof date === 'string' ? new Date(date) : date;

  if (isNaN(parsedDate.getTime())) {
    return null;
  }

  return parsedDate.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};
