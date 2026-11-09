function multiplyValue(value: number, multiplier?: number): number {
  if (multiplier === undefined) {
    return value * 2;
  } else {
    return value * multiplier;
  }
}

type ProcessType = string | number | boolean;

function processInput(value: ProcessType): string | number {
  if (typeof value === 'string') {
    return value.trim().toLowerCase();
  } else if (typeof value === 'number') {
    return value * 10;
  } else {
    if (value) {
      return 'Active';
    } else {
      return 'Inactive';
    }
  }
}
