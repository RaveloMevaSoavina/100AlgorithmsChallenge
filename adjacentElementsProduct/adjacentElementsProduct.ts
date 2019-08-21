function adjacentElementsProduct(inputArray: number[]): number {
  let max = inputArray[0] * inputArray[1];
  let product = 0;
  for (let i = 1; i < inputArray.length - 1; i++){
    product = inputArray[i] * inputArray[i + 1]
    max = max < product ? product : max;
  }
  return product;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));