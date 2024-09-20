var numberArray = [1,2,3,4,5,6,7,8,9,10];
console.log("Number array :", numberArray);

function above5Filter(value) {
    return value > 5;
}

var filterNumberArray = numberArray.filter(above5Filter);
console.log("Filted Number array: ", filterNumberArray);

var shoppingList =["vadai", "mittai", "iceCream", "Peanut butter",
  "Milk", "Buttur", "Coconut"];
console.log("ShoppingList", shoppingList);

var searchValue = "Buttur";
function containsFilter(value) {
  return value.indexOf(searchValue) !== -1;
}

var searchShoppingList = shoppingList.filter(containsFilter);
console.log("search Shopping List" , searchShoppingList);
