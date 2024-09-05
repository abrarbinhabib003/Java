//You, as the customer, want to order a pizza.//
//The restaurant has a function that takes your order, processes it, and gives you a pizza as output.//


/*
Breakdown:
makePizza("large", "pepperoni"): This function is called first, and it prepares a large pizza with pepperoni.
calculatePrice("large"): The next function calculates the price of a large pizza.
generateBill(pizzaOrder, price): Finally, the generateBill function takes the pizza order and its price and returns the full bill.*/


/*
Real-World Imagination:
You (Customer): You interact with the system by calling the functions (ordering pizza).
Chef (makePizza function): Takes your input (size and toppings) and prepares the pizza.
Cashier (calculatePrice function): Determines the price based on the pizza size.
Bill Generator (generateBill function): Combines everything and gives you the final bill.
*/

function makePizza(size, topping) {
    return `Making a ${size} pizza with ${topping}`;
}
/*
function makePizza(size, topping): This is the chef (function) that prepares the pizza. The size and topping are the ingredients the chef uses to make the pizza.
return: The chef then gives you back the pizza after preparing it, based on your input.
*/


//Calling the Function:
//Now, you need to call the function (give your order to the chef) to make the pizza.//

let order1 = makePizza("large", "pepperoni");
console.log(order1);  // Output: "Making a large pizza with pepperoni"

/*
Using Multiple Functions:
Now imagine there are multiple chefs in the restaurant, each responsible for different tasks, like making pizza, calculating the price, and preparing the bill. You can use multiple functions to automate the entire process.

Step 1: Make the Pizza
We already have the function makePizza that prepares the pizza.

Step 2: Calculate the Price
Next, we need another function to calculate the price of the pizza based on its size.
*/
function calculatePrice(size) {
    if (size === "small") {
        return 10;
    } else if (size === "medium") {
        return 15;
    } else if (size === "large") {
        return 20;
    }
}
//This function calculates the price based on the size of the pizza.//


/*Step 3: Generate the Bill
Finally, we create another function to generate the bill. It takes the pizza and its price and gives you the total.*/
function generateBill(pizza, price) {
    return `Your order: ${pizza}. Total price: $${price}`;
}


//Full Code//

function makePizza(size, topping) {
    return `Making a ${size} pizza with ${topping}`;
}

function calculatePrice(size) {
    if (size === "small") {
        return 10;
    } else if (size === "medium") {
        return 15;
    } else if (size === "large") {
        return 20;
    }
}

function generateBill(pizza, price) {
    return `Your order: ${pizza}. Total price: $${price}`;
}

// Calling the functions
let pizzaOrder = makePizza("large", "pepperoni");
let price = calculatePrice("large");
let bill = generateBill(pizzaOrder, price);

console.log(bill);  
// Output: "Your order: Making a large pizza with pepperoni. Total price: $20"
//Your order: Making a large pizza with pepperoni. Total price: $20//


