/**
 * Returns a class name string from a list of class names.
 * @param classes - List of class names.
 * @returns Class name string.
 */
export const cn = (...classes: unknown[]): string =>
  [...new Set(classes)].filter((c) => !!c).join(' ');
