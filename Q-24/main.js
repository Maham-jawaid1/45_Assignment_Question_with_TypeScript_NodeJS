"use strict";
//define variable
let apple = "apple";
let UppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ['Apple', 'Banana', 'Cherry'];
//test for equality and inequality with string
console.log("\nIs Apple equal to apple");
console.log(apple == "apple");
console.log("\nIs Apple is not equal to apple?");
console.log(apple != "apple");
//test using lower case function
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(UppercaseApple.toLowerCase() == "apple");
console.log("\nIs APPLE is not equal to apple after converting to lowercase?");
console.log(UppercaseApple.toLowerCase() != "apple");
//numerical test
//equal to
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);
//notequal
console.log("\nIs ten is not eaqual to twenty?");
console.log(ten != twenty);
//greater than
console.log("\nIs ten is greater than zero?");
console.log(ten > 0);
//less than
console.log("\nIs twenty is less than 10?");
console.log(twenty < 10);
//greater than or equal to 
console.log("\nIs ten is greater then or equals to 5?");
console.log(ten >= 5);
//less than or equal to 
console.log("\nTwenty is less than or equal to 10?");
console.log(twenty <= 10);
//test usign and & or operator 
//using && "and"
console.log("\nTwenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\nTwenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);
//using || "or"
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 == 20);
//test whether item is include in array
console.log("\nIs cherry include in my Fruits array");
console.log(fruits.includes("Cherry"));
console.log("\nIs cherry not include in my array");
console.log(!fruits.includes("cherry"));
