//create a function called pizzaOven
//customize what information we keep track of for our pizza. include: crustType, sauceType, cheeses, and toppings

function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pie1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pie1)
var pie2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pie2)
var pie3 = pizzaOven("Stuffed Cheesie Crust", "Marinara", ["Mozzarella", "Cheddar"], ["Pineapple", "Canadian Bacon", "Jalapeno", "Mamas 'lil Peppers"]);
console.log(pie3)
var pie4 = pizzaOven("double crust", "traditional", ["mozzarella"], ["pear", "toasted walnuts", "arugala"]);
console.log(pie4)

var randomPie = {
    "crustType": ["deep dish", "hand tossed", "Stuffed Cheesie Crust", "double crust"],
    "sauceType": ["traditional", "marinara"],
    "cheeses": ["mozzarella", "three cheese", "cheddar"],
    "toppings": ["pineapple", "pear", "pepperoni", "sausage", "peppers"]
}

