function allLongestStrings(inputArray: string[]): string[] {
  let longest = inputArray[0].length;
  let returnArr = [];
  for (let i = 0; i < inputArray.length; i++){
    if (inputArray[i].length > longest){
      longest = inputArray[i].length;
    }
  }
  for (let j = 0; j < inputArray.length; j++){
    if (inputArray[j].length === longest){
        returnArr.push(inputArray[j]);
    }
  }
  return returnArr;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));