function meme(statement:string) {
  let tempArr = [];
  for (let i = 0; i < statement.length; i++)  {
    if (i % 2) {
      tempArr.push(statement.charAt(i).toUpperCase());
    }
    else { tempArr.push(statement.charAt(i)); }
  }
  let ans = "";
  tempArr.forEach(function(letter)  {
    ans += letter;
  })
  return ans;
}
console.log(meme("hello world"));
