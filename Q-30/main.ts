//creating a array
let userNames = ['Maham','Aiman','Hania','Admin','Alina'];
//using foreach loop on array
userNames.forEach(oneuser =>{
    if(oneuser === "Admin"){
console.log(`Hello ${oneuser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneuser}, thank you for logging in again.`)
    }
})