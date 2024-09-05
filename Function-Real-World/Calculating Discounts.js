/*
E-commerce websites often offer discounts, and the system needs to calculate the discounted price based on percentage discounts or coupon codes.

Function: calculateDiscountedPrice
This function takes the original price and a discount percentage, and returns the final price after applying the discount.

Imagination:
Imagine the discount as a seasonal sale. The function calculateDiscountedPrice acts like a salesperson adjusting the price after applying the discount.

If a customer is buying an item worth $200 with a 20% discount:*/

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    return originalPrice * (1 - discountPercentage / 100);
}
let discountedPrice = calculateDiscountedPrice(200, 20);
console.log(`Discounted Price: $${discountedPrice.toFixed(2)}`);
// Output: Discounted Price: $160.00















