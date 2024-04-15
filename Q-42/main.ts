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
//call make_great function to modify magicians names
let  great_magacians= make_great(magicians_name) 


//call show_magacians that show modifird list of magacians
 show_magicians(great_magacians)