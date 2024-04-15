//array of current users
var current_user = ["Usman", "ayesha", "Komal"];
//array of new user
var new_users = ["Jawaid", "Laiba", "Ayesha", "Alisha", "Komal"];
//loop through new-users to check for usersname avaibility
new_users.forEach(function (new_one_users) {
    //makin condition for user name  already exist and save in our condition variable
    var our_condition = current_user.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_users.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_users, " is already taken"));
    }
    else {
        console.log("This username ".concat(new_one_users, " is available"));
    }
});
