
//creating  a guest list array
let guestList = ['Aiman','Hooriya','Kashaf','Hania'];
//making variable for those guest cant come
let dontcome = guestList[0];
//print the name of guest who cant come
console.log(dontcome,"can't come.");
//add or remove values from guest list array
guestList.splice(0, 1,"Maham");
//adding message
console.log("\n\tGood News! We have found a bigger table for Dinner.");
//adding a guest at starting index of array
guestList.unshift("Sana")
//adding a guest at ending of index array
guestList.push("Zainab");
//putting the value of middle value of array
let middleIndex: number = Math.floor(guestList.length / 2)
//Adding a new guest to middle index of array
guestList.splice(middleIndex, 0,  "Nabiha");
//print 
console.log("\n List of our Guests:\n");
//sending invitation message to our guest one by one with thier net
guestList.forEach(oneguest => console.log(`Hello ${oneguest}, would you like to Dinner with me?`));