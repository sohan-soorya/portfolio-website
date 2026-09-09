export function quantityError(value: string, available: number): string | null {
  const quantity = Number(value);
  if (!value.trim() || !Number.isSafeInteger(quantity) || quantity < 1) {
    return 'Enter a whole number of at least 1.';
  }
  return quantity > available ? `This batch has ${available} units available. Choose ${available} or fewer.` : null;
}
