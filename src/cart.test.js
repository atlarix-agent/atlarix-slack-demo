import { test } from "node:test";
import assert from "node:assert/strict";
import { cartTotal, formatCents, maxPrice, minPrice } from "./cart.js";

test("totals price × quantity", () => {
  assert.equal(cartTotal([{ priceCents: 500, quantity: 2 }, { priceCents: 250, quantity: 1 }]), 1250);
});

test("applies a percentage discount", () => {
  assert.equal(cartTotal([{ priceCents: 1000, quantity: 1 }], 10), 900);
});

test("returns the highest line price", () => {
  assert.equal(maxPrice([{ priceCents: 500, quantity: 2 }, { priceCents: 250, quantity: 3 }]), 500);
});

test("an empty cart has no max price", () => {
  assert.equal(maxPrice([]), 0);
});

test("returns the lowest line price", () => {
  assert.equal(minPrice([{ priceCents: 500, quantity: 2 }, { priceCents: 250, quantity: 3 }]), 250);
});

test("an empty cart has no min price", () => {
  assert.equal(minPrice([]), 0);
});

test("formats cents as dollars", () => {
  assert.equal(formatCents(1234), "$12.34");
});
