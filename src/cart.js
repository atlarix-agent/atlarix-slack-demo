/** Total of a cart in cents: price × quantity per line, then the discount. */
export function cartTotal(lines, discountPercent = 0) {
  const subtotal = lines.reduce((sum, line) => sum + line.priceCents * line.quantity, 0);
  return Math.round(subtotal * (1 - discountPercent / 100));
}

/** Total number of items in a cart: sum of the line quantities. */
export function itemCount(lines) {
  return lines.reduce((sum, line) => sum + line.quantity, 0);
}

/** "$12.34" from 1234 cents. */
export function formatCents(cents) {
  return `$${(cents / 100).toFixed(2)}`;
}
