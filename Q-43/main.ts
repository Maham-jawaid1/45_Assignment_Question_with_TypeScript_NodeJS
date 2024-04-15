//define the function to show magicians names
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}
//function to make magacians great through .map() it will modify array
function make_great(magicians: string[]){
    return magicians.map( name=> `The Great ${name}`);
}

//define an array of magicians names
let magicians_name = ["Harry potter","kiran","laiba"];

 //making a copy of original array through .slice() function
 let copy_magicians_names = magicians_name.slice();

//  modify the copied array to include "the great with thier names"
let copy_great_magicians =make_great(copy_magicians_names);

//show botth arrays original and coppied

// original 
console.log("\nOriginal Array\n")
show_magicians(magicians_name);
//coppied
console.log("\nCopied Array\n")
show_magicians(copy_great_magicians);