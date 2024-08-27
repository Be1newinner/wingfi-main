/**
 * Converts a number to the Indian currency format.
 *
 * @param price - The number to be formatted.
 * @returns The price formatted in Indian currency style.
 */
export function formatToIndianCurrency(price: number): string {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(price);
}
