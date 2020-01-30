
let a = 10; //one namespace only
console.log("Number is: " + a);
var k: Number = 12345;
enum Languages {English,Hindi,Tamil};

/**
 * Interface declaration.
 */
interface StudentInfo{
    Name: String,
    Age: number,
    Phone: String,
    Language: Languages
}

let students:StudentInfo = {
    Name: "Kelvin",
    Age: 20,
    Phone: "21800000",
    Language: Languages[Languages.English,Languages.Hindi,Languages.Tamil]
}

let studentsList:StudentInfo[] = [
    {Name: "Peter", Age: 26, Phone:999, Language: Languages.English},
    {Name: "Mary", Age: 27, Phone: 112, Language: Languages.Hindi}
]

for (var i = 0; i < studentsList.length;++i) {
    var element = studentsList[i];
    console.log("Age: " + element.Age + "..." + " with name: " + element.Name + " has Phone: " + element.Phone + " knowing language: " + element.Language);
}

//parameters with types
function GetStudentsList(students: StudentInfo[]){
    students.forEach(element => {
        console.log("Age: " + element.Age + "..." + " with name: " + element.Name + " has Phone: " + element.Phone + " knowing language: " + element.Language);
    }
    ); 
}

GetStudentsList(studentsList);

//rest parameters
function GetNumbers(...nums: number[]) {
    nums.forEach(element => {
        console.log("Number: " + element);
    });
}

GetNumbers(1,2,3,4,5,6);

//default parameters
function GetInfo(info: string = "Happy"){
    console.log(info);
}

GetInfo();
GetInfo("Sad Life :(");

/**
 * Lamda Function
 */
let studentName = function (lName:string,fName:string){
    return fName + " " + lName;
}
console.log(studentName("Mock","Kelvin"));

/**
 * Arrow Function
 */
let studentFullName = (lName:string,fName:string) => {return fName + " " + lName};
console.log(studentFullName("Mock","Kelvin"));




console.log("End of tutorial:)");
