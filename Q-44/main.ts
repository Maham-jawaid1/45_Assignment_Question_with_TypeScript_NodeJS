function makeSandwich(...items: string[]){
       console.log("\n making a sandwich with the following items: \n");
       items.forEach(singleItem => console.log("-" +singleItem));
       console.log("\nNow Enjoy Sandwich");
    }
//call the function 3 times with 3 different number  of argments
makeSandwich("Chicken","Cheese","Mayo","Egg");
makeSandwich("Bread","Butter");
makeSandwich("Bread","Butter","Mayo","Egg","Cheese","Chicken","lettuce","Tomato");
