//creating a variable
let age = 16;
//creating a program for deterning the stage of life using if-else chain
if (age < 2){
    console.log("You are a baby.");
}
else if(age >=2 && age <4) {
    console.log("You are a Toddler.");
}
else if(age >=4 && age <13){
   console.log("You are a kid.");
}
else if(age >= 13 && age <20){
  console.log("You are a Teenager.");
}
else if(age >= 20 && age <65){
  console.log("You are an Adults.");
}
else if(age >= 65){
    console.log("You are Elders");
}