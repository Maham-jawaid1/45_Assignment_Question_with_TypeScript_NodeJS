//define a function to print each magician name from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//define a array containing magicians name 
var magician_name = ["Harry Poter", "Aiman", "Wareesha"];
//call the function to print each magician name
show_magicians(magician_name);
