import assert from 'node:assert/strict';
import { quantityError } from '../src/lib/quantity.ts';

// Retain the requested quantity when switching batches, but revalidate its limit.
assert.equal(quantityError('25', 48), null);
assert.match(quantityError('25', 24), /24 units/);
assert.equal(quantityError('24', 24), null);
for (const input of ['', ' ', '0', '-1', '1.5', 'NaN', 'Infinity', '9007199254740992']) {
  assert.match(quantityError(input, 48), /whole number/);
}
console.log('Quantity boundaries and batch-switch validation passed.');
