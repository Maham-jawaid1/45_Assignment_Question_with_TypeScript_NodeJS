let userNames = ["Maham","Aiman","Sana","Kashaf","Zainab","Admin"]
if (userNames.length === 0){
       console.log("Your Array in Empty We need to find some users!");
}else  {
     userNames.forEach(oneuser => {
        if(oneuser === "Admin"){
            console.log(`Hello ${oneuser}, would you like to see a status report`)
        }else {
            console.log(`Hello ${oneuser},thanku you for logging in again`);
        }
     })
}