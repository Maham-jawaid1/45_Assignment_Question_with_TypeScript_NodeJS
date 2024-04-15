//creating a array
var petAnimals = ["Cat", "Dog", "Rabbit"];
//using for - loop
for (var _i = 0, petAnimals_1 = petAnimals; _i < petAnimals_1.length; _i++) {
    var onePet = petAnimals_1[_i];
    console.log("A ".concat(onePet, " would make a great pet"));
    //print a message out side of for-loop
    console.log("Any of these animals would make a great pet!\n");
}
