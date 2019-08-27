function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
  let me = arguments[0] + arguments[1];
  let friend = arguments[2] + arguments[3];
  if (me === friend){
      return true;
  } else {
      return false;
  }
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
