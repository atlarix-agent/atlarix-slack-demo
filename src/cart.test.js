import { test } from "node:test";
import assert from "node:assert/strict";
import { cartTotal, formatCents } from "./cart.js";

test("totals price × quantity", () => {
  assert.equal(cartTotal([{ priceCents: 500, quantity: 2 }, { priceCents: 250, quantity: 1 }]), 1250);
});

test("applies a percentage discount", () => {
  assert.equal(cartTotal([{ priceCents: 1000, quantity: 1 }], 10), 900);
});

test("formats cents as dollars", () => {
  assert.equal(formatCents(1234), "$12.34");
});
