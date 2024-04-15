//creating a array
let numbers = [1,2,3,4,5,6,7,8,9];
//using for loop
for  ( let oneNumber of numbers) {
    let originalEnding: string;
    if (oneNumber === 1){
   originalEnding = "st"
    }
  else if (oneNumber === 2){
    originalEnding = "nd"
  }
  else if (oneNumber === 3){
    originalEnding = "rd"
  }
  else {
    originalEnding = "th"
  }
    console.log(`${oneNumber} ${originalEnding}`)




}