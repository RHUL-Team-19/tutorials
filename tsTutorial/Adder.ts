function solution (input:string) {
  const newLn = /\n/gi;
  console.log(eval(input.replace(newLn, "+")));
}
const input = "4\n5\n8";
solution(input);
