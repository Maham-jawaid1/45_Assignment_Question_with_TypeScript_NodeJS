var guestList = ['Aiman', 'Miral', 'Alisha', 'Areeba'];
var dontcome = guestList[2];
console.log(dontcome, "can't come");
guestList.splice(2, 2, "Hooriya");
guestList.forEach(function (guest) { return console.log("Hello ".concat(guest, ", would you like to dinner with me")); });
