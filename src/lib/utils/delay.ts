/**
 * Returns a promise that resolves after a given duration.
 * @param ms - Duration in milliseconds.
 * @returns Promise that resolves after the given duration.
 */
export const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));
