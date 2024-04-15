let guestList = ['Aiman','Miral','Alisha','Areeba'];
let dontcome = guestList [2];

 console.log(dontcome,"can't come");

 guestList.splice(2,2, "Hooriya");

 guestList.forEach(guest =>console.log(`Hello ${guest}, would you like to dinner with me`));
