/*
In e-commerce, sales tax can vary depending on the state or region where the customer is located. The system needs to calculate the correct sales tax based on the customer’s shipping address.

Function: calculateSalesTax
This function takes the price of items and the tax rate (which varies by state) and calculates the total tax amount.
Imagination:
The calculateSalesTax function acts like a tax consultant for your e-commerce business. It helps ensure that you are charging the correct amount of sales tax based on where the customer is located.
If a customer is buying a product for $300, and the sales tax in their state is 7%:
*/

function calculateSalesTax(price, taxRate) {
    return price * taxRate;
}
let salesTax = calculateSalesTax(300, 0.07);
console.log(`Sales Tax: $${salesTax.toFixed(2)}`);
// Output: Sales Tax: $21.00
 
