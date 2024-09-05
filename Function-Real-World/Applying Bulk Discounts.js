/*
Some e-commerce platforms offer bulk discounts where customers get a discount if they buy a certain number of items. For example, if you buy more than 10 items, you get a 10% discount.

Function: applyBulkDiscount
This function checks the quantity of items in the cart and applies a discount if it meets the threshold for a bulk discount.
Imagination:
You’re the system offering customers bulk discounts for large purchases. The applyBulkDiscount function acts like a salesperson automatically adjusting the price when customers buy in bulk.
If an item costs $100, and the store offers a 10% discount for quantities of 10 or more:*/

function applyBulkDiscount(price, quantity, discountThreshold, discountPercentage) {
    if (quantity >= discountThreshold) {
        return price * (1 - discountPercentage / 100);  // Apply the discount
    }
    return price;  // No discount
}
let discountedPrice = applyBulkDiscount(100, 12, 10, 10);
console.log(`Discounted Price: $${discountedPrice.toFixed(2)}`);
// Output: Discounted Price: $90.00
