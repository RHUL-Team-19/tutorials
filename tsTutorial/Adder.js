function solution(input) {
    var newLn = /\n/gi;
    console.log(eval(input.replace(newLn, "+")));
}
var input = "4\n5\n8";
console.log(input);
solution(input);
