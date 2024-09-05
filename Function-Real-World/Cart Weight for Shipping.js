/*
In many e-commerce systems, the shipping cost depends on the total weight of all the items in a customer’s shopping cart. You need to sum up the weight of all items before calculating the shipping cost.

Function: calculateCartWeight
This function takes an array of items (each with a weight and quantity) and calculates the total weight of the cart.

Imagination:
You are like the shipping department calculating the total weight of a customer’s order before processing the shipment. The function calculateCartWeight helps determine how much the package weighs, which impacts the shipping cost.

If a cart contains a 2kg item (quantity: 3) and a 1kg item (quantity: 2):

*/

function calculateCartWeight(cartItems) {
    let totalWeight = 0;
    for (let item of cartItems) {
        totalWeight += item.weight * item.quantity;  // Multiply item weight by quantity
    }
    return totalWeight;
}

let cart = [
    { weight: 2, quantity: 3 },
    { weight: 1, quantity: 2 }
];
let totalWeight = calculateCartWeight(cart);
console.log(`Total Cart Weight: ${totalWeight} kg`);
// Output: Total Cart Weight: 8 kg
