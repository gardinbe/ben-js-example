/**
 * Represents the result of an operation.
 * @template T - Type of the successful result.
 * @template E - Type of the error result.
 */
export type Result<T, E extends Error = Error> = [null, E] | [T, null];
