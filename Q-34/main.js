//creating a array
var Pizza = ["Cheese Burst", "Chicken Tikka", "Cheese Malai Boti"];
//using for loop
for (var _i = 0, Pizza_1 = Pizza; _i < Pizza_1.length; _i++) {
    var onePizza = Pizza_1[_i];
    console.log("I like ".concat(onePizza, " Pizza"));
}
//print a message outside of the for-loop
console.log("Pizza is the only love triangle i want.");
