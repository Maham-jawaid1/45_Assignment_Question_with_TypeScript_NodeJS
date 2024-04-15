//making a function
function make_shirt (size: string = "Large", printMessage:string = "I Love Typescript"){
       console.log(`Creating a ${size} shirt with the ${printMessage} print on shirt`);
}

//calling a function with by-default values
make_shirt();

//calling a function now with medium size and default messages
make_shirt("Medium")

//calling a function now with small size and also different print message
make_shirt("Small", "I Love JavaScript")