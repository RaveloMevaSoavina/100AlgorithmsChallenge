function alternatingSums(a: number[]): number[] {
  let odds = 0
  let evens = 0;
  for (let i = 0; i < a.length; i++){
    if (i % 2 !== 0){
        odds += a[i];
    } else {
        evens += a[i];
    }
  }
  return [evens, odds];
}

console.log(alternatingSums([50, 60, 60, 45, 70]))