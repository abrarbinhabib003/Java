/*
When a customer adds items to their shopping cart, the system needs to calculate the total price of the items, including any taxes. Let’s assume there's a fixed sales tax rate.

Function: calculateTotalPrice
This function takes the price of items in the cart and the tax rate, and returns the total price after tax.

Formula:



Total Price=Price×(1+Tax Rate)

Imagination:
You are the system processing a customer’s order. The function calculateTotalPrice works like a cashier, adding up the prices of each item in the cart, then calculating the tax to give the final price.


If a customer has 2 items in their cart (a $50 item and a $100 item), and the tax rate is 8%:*/

function calculateTotalPrice(cartItems, taxRate) {
    let subtotal = 0;
    for (let item of cartItems) {
        subtotal += item.price * item.quantity;  // Calculate price for each item
    }
    return subtotal * (1 + taxRate);  // Add tax to the subtotal
}
let cart = [
    { price: 50, quantity: 1 },
    { price: 100, quantity: 1 }
];
let totalPrice = calculateTotalPrice(cart, 0.08);
console.log(`Total Price: $${totalPrice.toFixed(2)}`);
// Output: Total Price: $162.00
