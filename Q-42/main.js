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
//call make_great function to modify magicians names
var great_magacians = make_great(magicians_name);
//call show_magacians that show modifird list of magacians
show_magicians(great_magacians);
