function alphabetSubsequence(s: string): boolean {
  s = s.split('');
  let arr = [];
  for (let i = 0; i < s.length; i++){
    arr.push(s[i].charCodeAt());
  }
  for (let j = 0; j < arr.length - 1; j++){
    if (arr[j] <= arr[j + 1]){
      continue;
    } else {
      return false;
    }
  }
  return true;
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
