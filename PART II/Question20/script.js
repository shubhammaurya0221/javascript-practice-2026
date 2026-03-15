// 20. Use const to create a array. try re assigning the array and observe the error

const array = [2,3,5,6];
console.log(array);

// array = [34,678,987];
// console.log(array);    // TypeError: Assignment to constant variable.

// we cannot re assign a values on but we can update it using pop and push

array.push(22);
console.log(array)