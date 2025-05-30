import type { POJO } from '~/lib/types/pojo';
import type { Result } from '~/lib/types/result';

/**
 * Sends a GET request to the provided API and returns the JSON response.
 * @param url - URL of the API.
 * @returns JSON response result.
 */
export const fetchJson = async <T extends POJO>(url: string): Promise<Result<T>> => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      return [null, new Error('Response was not ok')];
    }

    const data = await res.json();
    return [data as T, null];
  } catch (e) {
    return [null, e as Error];
  }
};
