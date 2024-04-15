//define afunction to create a car object with optional option
function create_car(manufacturer, model, ...options){
         let car = {
             manufacturer: manufacturer,
             model: model,
         };


         //additional option to the car object
        options.forEach(option => {
            let [Key, Value] = option.split(":");
            car[Key.trim()]= Value.trim();
        });
       

        return car;
}

//call the function to create a car object
let my_car = create_car("Toyota","Corrolla","color : Black", "Sunroof: True" , "Year: 2024");
console.log(my_car);