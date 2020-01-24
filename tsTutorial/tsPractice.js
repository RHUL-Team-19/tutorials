function meme(statement) {
    var tempArr = [];
    for (var i = 0; i < statement.length; i++) {
        if (i % 2) {
            tempArr.push(statement.charAt(i).toUpperCase());
        }
        else {
            tempArr.push(statement.charAt(i));
        }
    }
    var ans = "";
    tempArr.forEach(function (letter) {
        ans += letter;
    });
    return ans;
}
console.log(meme("hello world"));
