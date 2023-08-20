//part 01

// Taklif 2


document.write("<h1>Elzero</h1>");
document.querySelector('h1').style.color = 'blue';
document.querySelector('h1').style.fontSize = '80px';
document.querySelector('h1').style.fontWeight = 'bold';
document.querySelector('h1').style.textAlign = 'center';
document.querySelector('h1').style.fontFamily = 'Arial';
// Taklif 3


console.log('%cElzero %cWeb %cSchool',
    'color: red ; font-size  : 40px ;',
    'color: green ; font-size  : 40px ; font-weight : bold ;',
    'font-size: 40px; background-color: blue; color:white');
// Taklif 4


console.group('Gourpe 1');
console.log("Message One");
console.log("Message Two");
console.group('Child Group');
console.log("Message One");
console.log("Message Two");
console.group('Grand Child Group');
console.log("Message One");
console.log("Message Two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group('Gourpe 2');
console.log("Message One");
console.log("Message Two");
// Taklif 5 


console.table(['Berlin', 'Alaa', 'Fabio']);
//taklif 6


// console.log("Iam In Console");
// document.write("Iam In Page");



//part 02

//takalif 1

let numberOne = 10;
let numberTwo = 20;
console.log(numberOne + '' + numberTwo);
console.log(typeof(numberOne + '' + numberTwo));
// Template Literals
console.log(`${numberOne}${numberTwo}`);
console.log(typeof `${numberOne}${numberTwo}`);
console.log('10\n20');
console.log(`${numberTwo}\n${numberOne}`);
//takalif 2 

console.log(elzero.innerHTML);
console.log(typeof elzero);
//  <div id = "elzero" > object < /div>

//takalif 3
console.log(`I'm In
\\\\
Love \\\\ \"\"\" \'\'\'
\+\+ With \+\+
\\\"\"\"\\\"\"\"
\"\"JavaScript\"\"\`
        `);
//takalif 4
let a = 21;
let b = 20;
console.log(`_${a}_${b}${a}_${b}${b+ (a-b)}_${(a-b)*b}${a}_${b}`);