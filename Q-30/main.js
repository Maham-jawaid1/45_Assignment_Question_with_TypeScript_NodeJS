//creating a array
var userNames = ['Maham', 'Aiman', 'Hania', 'Admin', 'Alina'];
//using foreach loop on array
userNames.forEach(function (oneuser) {
    if (oneuser === "Admin") {
        console.log("Hello ".concat(oneuser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneuser, ", thank you for logging in again."));
    }
});
