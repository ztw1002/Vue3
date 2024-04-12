// Method 1: Using Set
const array1 = [1, 2, 3, 4, 4, 5, 6, 6];
const uniqueArray1 = [...new Set(array1)];
console.log(uniqueArray1); // Output: [1, 2, 3, 4, 5, 6]

// Method 2: Using filter
const array2 = [1, 2, 3, 4, 4, 5, 6, 6];
const uniqueArray2 = array2.filter((value, index, self) => {
  return self.indexOf(value) === index;
});
console.log(uniqueArray2); // Output: [1, 2, 3, 4, 5, 6]

// Method 3: Using reduce
const array3 = [1, 2, 3, 4, 4, 5, 6, 6];
const uniqueArray3 = array3.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);
console.log(uniqueArray3); // Output: [1, 2, 3, 4, 5, 6]