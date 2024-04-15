//define a function to print each magician name from an array


function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}
//define a array containing magicians name 
let magician_name = ["Harry Poter", "Aiman","Wareesha"]

//call the function to print each magician name
show_magicians(magician_name);