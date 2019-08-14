function addBorder(picture: string[]): string[] {
  const length = picture[0].length;
  picture.unshift("*".repeat(length + 2));
  for (let i = 0; i < picture.length; i++){
    picture[i] = "*" + picture[i] + "*";
  }
  picture.push("*".repeat(length + 2));
  return picture;
}

console.log(addBorder(["abc", "ded"]));