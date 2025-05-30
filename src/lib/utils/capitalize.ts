/**
 * Capitalizes the first letter of a string and returns the result.
 * @param str - String to capitalize.
 * @returns Capitalized string.
 */
export const capitalize = <T extends string>(str: T): Capitalize<T> =>
  (str.charAt(0).toUpperCase() + str.slice(1)) as Capitalize<T>;
