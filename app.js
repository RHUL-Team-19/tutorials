var a = 10; //one namespace only
console.log("Number is: " + a);
var k = 12345;
var Languages;
(function (Languages) {
    Languages[Languages["English"] = 0] = "English";
    Languages[Languages["Hindi"] = 1] = "Hindi";
    Languages[Languages["Tamil"] = 2] = "Tamil";
})(Languages || (Languages = {}));
;
var students = {
    Name: "Kelvin",
    Age: 20,
    Phone: "21800000",
    Language: Languages[Languages.English, Languages.Hindi, Languages.Tamil]
};
var studentsList = [
    { Name: "Peter", Age: 26, Phone: 999, Language: Languages.English },
    { Name: "Mary", Age: 27, Phone: 112, Language: Languages.Hindi }
];
for (var i = 0; i < studentsList.length; ++i) {
    var element = studentsList[i];
    console.log("Age: " + element.Age + "..." + " with name: " + element.Name + " has Phone: " + element.Phone + " knowing language: " + element.Language);
}
//parameters with types
function GetStudentsList(students) {
    students.forEach(function (element) {
        console.log("Age: " + element.Age + "..." + " with name: " + element.Name + " has Phone: " + element.Phone + " knowing language: " + element.Language);
    });
}
GetStudentsList(studentsList);
//rest parameters
function GetNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    nums.forEach(function (element) {
        console.log("Number: " + element);
    });
}
GetNumbers(1, 2, 3, 4, 5, 6);
//default parameters
function GetInfo(info) {
    if (info === void 0) { info = "Happy"; }
    console.log(info);
}
GetInfo();
GetInfo("Sad Life :(");
/**
 * Lamda Function
 */
var studentName = function (lName, fName) {
    return fName + " " + lName;
};
console.log(studentName("Mock", "Kelvin"));
/**
 * Arrow Function
 */
var studentFullName = function (lName, fName) { return fName + " " + lName; };
console.log(studentFullName("Mock", "Kelvin"));
console.log("End of tutorial:)");
