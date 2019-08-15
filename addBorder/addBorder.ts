function addBorder(picture: string[]): string[] {
  const length = picture[0].length;
  picture.unshift("*".repeat(length));
  picture.push("*".repeat(length));
  for (let i = 0; i < picture.length; i++){
    picture[i] = "*" + picture[i] + "*";
  }
  
  return picture;
}

console.log(addBorder(["abc", "ded"]));