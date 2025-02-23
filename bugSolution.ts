function printNumber(num: number): void {
  console.log(num);
}

function isNumber(num: any): num is number {
  return typeof num === 'number';
}

function printNumberSafe(num: any): void {
  if (isNumber(num)) {
    printNumber(num);
  } else {
    console.error("Invalid input: Not a number");
  }
}

printNumberSafe("123"); //Prints error message
printNumberSafe(123); // Prints 123