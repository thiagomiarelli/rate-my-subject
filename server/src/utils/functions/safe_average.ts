

/**
 * Returns the average given sum and count
 * Returns 0 if there is no count
 * @param {number} cnt - Number of elements in list
 * @param {number} sum - Sum of elements in list
 * 
 **/

export function safe_average(sum: number, cnt: number) {
  if (!cnt) return 0;
  return sum / cnt;
}