function alphabeticShift(inputString: string): string {
  let str = inputString.split('');
  let newStr = [];
  for (let i = 0; i < str.length; i++){
    if (str[i] === 'z'){
      newStr.push('a');
    } else {
      newStr.push(String.fromCharCode(str[i].charCodeAt() + 1));
    }
  }
  return newStr.join('');
}

console.log(alphabeticShift('crazy'));