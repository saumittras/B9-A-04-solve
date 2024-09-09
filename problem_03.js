function deleteInvalids(array) {
  const validArray = [];
  if (Array.isArray(array) !== true) {
    return "Invalid Array. Provide a Valid Array.";
  }
  for (const item of array) {
    if (isNaN(item)) {
    } else if (typeof item === "number") {
      validArray.push(item);
    }
  }
  return validArray;
}

const invalidArray = [1, 2, -3];

const valid = deleteInvalids(invalidArray);
console.log(valid);
