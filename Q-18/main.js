var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//making a array of countries and print its original order 
var countriestovisit = ['China', 'America', 'London', 'Brazil'];
console.log("Original Order:", countriestovisit);
// Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical order:", __spreadArray([], countriestovisit, true).sort());
// Show that your array is still in its original order by printing it.
console.log("Still in original order:", countriestovisit);
//  Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Order:", __spreadArray([], countriestovisit, true).reverse());
//Show that your array is still in its original order by printing it again.
console.log("Still in original order:", countriestovisit);
// Reverse the order of your list. Print the array to show that its order has changed.
console.log("Original Array Revesed:", countriestovisit.reverse());
//  Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Back to Original Order:", countriestovisit.reverse());
//  Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Sorted in Alphabetical Order:", countriestovisit.sort());
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Original Array Reverse Again:", countriestovisit.reverse());
