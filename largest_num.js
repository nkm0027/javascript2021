// if,else,else if
//witch case

// if(condition)
// {
//     statement1;
//     statement2;
//     }
//  else if (condition2)
//  {
//      statement3;
//      statement4;
//  }   
//  else if(condition3)
//  {
//      statement5;
//      statement6;
//  }
//  else
//  {
//      statement7;
//      statement8;
//  }


// let username = prompt("Enter your name:");
// let age = parseInt(prompt("Enter your age:"));
// if (age > 40) {
//     document.write("Welcome" + " " + username + "<br>");
//     document.write("you can take the vaccine:");
// } else if (age > 18) {
//     document.write(username + "You can register for vaccine:");

// } else {
//     document.write("Sorry" + username + "you are not elegible to take the vaccine");

// }

// 

let num1 = parseInt(prompt("Enter num1: "));
let num2 = parseInt(prompt("Enter num2: "));
let num3 = parseInt(prompt("Enter num3: "));

if (num1 > num2 && num1 > num3) {
    document.write("num1 is the greatest number ");
} else if (num2 > num1 && num2 > num3) {
    document.write("num2 is the greatest number ");
} else if (num3 > num1 && num3 > num2) {
    document.write("num3 is the greatest number ");
} else {
    document.write("All Number's are equals");
}
let x = prompt("Enter num1: ");
console.log(x);

let num1 = parseInt(prompt("Enter num1: "));
let num2 = parseInt(prompt("Enter num2: "));
let num3 = parseInt(prompt("Enter num3: "));

if (num1 > num2 && num1 > num3) {
    console.log("num1 is the greatest number ");
} else if (num2 > num1 && num2 > num3) {
    console.log("num2 is the greatest number ");
} else if (num3 > num1 && num3 > num2) {
    console.log("num3 is the greatest number ");
} else {
    document.write("All Number's are equals");
}