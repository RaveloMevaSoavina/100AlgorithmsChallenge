function addTwoDigits(n: any): number {
  let number = n.toString().split('');
  return parseInt(number[0]) + parseInt(number[1]);
}

console.log(addTwoDigits(29));