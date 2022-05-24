const { TypewriterClass } = require("typewriter-effect");

function pizzaOven(crust, sause, cheese, toppins) {
  var pizza = {};
  pizza.crust = crust;
  pizza.sause = sause;
  pizza.cheese = cheese;
  pizza.toppins = toppins;

  return pizza;
}

pizza1 = pizzaOven(
  "deep dish",
  "traditional",
  ["mozzarella"],
  ["pepparoni", "sausage"]
);

pizza2 = pizzaOven(
  "hand tossed",
  "marinara",
  ["mozzarella", "feta"],
  ["mushroom", "olive", "oninons"]
);
pizza3 = pizzaOven(
  "hand tossed",
  "marinara",
  ["feta"],
  ["pepparoni", "oninons"]
);

pizza4 = pizzaOven(
  "thin tossed",
  "marinara",
  ["mozzarella"],
  ["olive", "oninons"]
);

// bonus challenge

function RandomPizza() {
  crustTypes = ["deep dish", "hand tossed", "sausage crust", "thin crust"];
  sauseTypes = ["traditonal", "marinara", "pesto"];
  cheeseTypes = ["mozzarella", "feta", "gorgonzola"];
  toppingsTypes = ["mushroom", "olive", "oninons", "pepparoni", "sausage"];
  numberOfTopping = [1, 2, 3];
  numberOfCheese = [1, 2, 3];

  function pizzaGen(ingredient) {
    return ingredient[Math.ceil(Math.random() * ingredient.length - 1)];
  }

  toppingsCount = pizzaGen(numberOfTopping);
  cheeseCount = pizzaGen(numberOfCheese);

  var pizza = {};
  pizza.crust = pizzaGen(crustTypes);
  pizza.sause = pizzaGen(sauseTypes);
  if (cheeseCount > 1) {
    pizza.cheese = [];
    for (i = 0; i < cheeseCount; i++) {
      pizza.cheese.push(pizzaGen(cheeseTypes));
    }
  } else {
    pizza.cheese = pizzaGen(cheeseTypes);
  }
  if (toppingsCount > 1) {
    pizza.toppings = [];
    for (i = 0; i < toppingsCount; i++) {
      pizza.toppings.push(pizzaGen(toppingsTypes));
    }
  } else {
    pizza.toppings = pizzaGen(toppingsTypes);
  }

  return pizza;
}

var randPizza = RandomPizza();

console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);
console.log(randPizza);
