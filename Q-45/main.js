//define afunction to create a car object with optional option
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    //additional option to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), Key = _a[0], Value = _a[1];
        car[Key.trim()] = Value.trim();
    });
    return car;
}
//call the function to create a car object
var my_car = create_car("Toyota", "Corrolla", "color : Black", "Sunroof: True", "Year: 2024");
console.log(my_car);
