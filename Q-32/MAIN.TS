//array of current users
let current_user = ["Usman","ayesha","Komal"]
//array of new user
let new_users = ["Jawaid","Laiba","Ayesha","Alisha","Komal"]

//loop through new-users to check for usersname avaibility
new_users.forEach(new_one_users => {
    //makin condition for user name  already exist and save in our condition variable
   let our_condition = current_user.some(current_one_user => current_one_user.toLowerCase() === new_one_users.toLowerCase())
    if (our_condition){
 console.log(`Sorry ${new_one_users} is already taken`)
    } else {
        console.log(`This username ${new_one_users} is available`)
    }
})