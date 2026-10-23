/** Total of a cart in cents: price × quantity per line, then the discount. */
export function cartTotal(lines, discountPercent = 0) {
  const subtotal = lines.reduce((sum, line) => sum + line.priceCents * line.quantity, 0);
  return Math.round(subtotal * (1 - discountPercent / 100));
}

/** Highest single-line price in cents. */
export function maxPrice(lines) {
  return lines.reduce((max, line) => Math.max(max, line.priceCents), 0);
}

/** Lowest single-line price in cents; 0 for an empty cart, like maxPrice. */
export function minPrice(lines) {
  if (lines.length === 0) return 0;
  return lines.reduce((min, line) => Math.min(min, line.priceCents), Infinity);
}

/** "$12.34" from 1234 cents. */
export function formatCents(cents) {
  return `$${(cents / 100).toFixed(2)}`;
}
