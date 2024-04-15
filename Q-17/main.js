//creating  a guest list array
var guestList = ['Aiman', 'Hooriya', 'Kashaf', 'Hania'];
//making variable for those guest cant come
var dontcome = guestList[0];
//print the name of guest who cant come
console.log(dontcome, "can't come.");
//add or remove values from guest list array
guestList.splice(0, 1, "Maham");
//adding message
console.log("\n\tGood News! We have found a bigger table for Dinner.");
//adding a guest at starting index of array
guestList.unshift("Sana");
//adding a guest at ending of index array
guestList.push("Zainab");
//putting the value of middle value of array
var middleIndex = Math.floor(guestList.length / 2);
//Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Nabiha");
//print 
console.log("\n List of our Guests:\n");
//sending invitation message to our guest one by one with thier net
guestList.forEach(function (oneguest) { return console.log("Hello ".concat(oneguest, ", would you like to Dinner with me?")); });
//invite only two guest
console.log("\n\tUnfortunately, the dinner table want to arrive on time, so i can only invite two Guest to dinner with me.\n");
//using while loop  to remove guest from the array unttil only two name remain
while (guestList.length > 2) {
    var removedguest = guestList.pop();
    console.log("Sorry, ".concat(removedguest, " I can't invite you to dinner"));
}
//printing a invitition to the last two guest names
console.log("\n\tInvitation to the last 2 Guest\n");
guestList.forEach(function (lasttwo) { return console.log("Luckly ".concat(lasttwo, ", you are still invited to dinner ")); });
//removing last two guest from the list
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
