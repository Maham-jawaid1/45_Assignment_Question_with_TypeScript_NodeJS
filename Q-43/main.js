//define the function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//function to make magacians great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//define an array of magicians names
var magicians_name = ["Harry potter", "kiran", "laiba"];
//making a copy of original array through .slice() function
var copy_magicians_names = magicians_name.slice();
//  modify the copied array to include "the great with thier names"
var copy_great_magicians = make_great(copy_magicians_names);
//show botth arrays original and coppied
// original 
console.log("\nOriginal Array\n");
show_magicians(magicians_name);
//coppied
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
