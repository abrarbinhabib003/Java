/*
You want to track inventory levels to make sure you have enough stock of a product. The system needs to calculate how many items are left after sales.

Function: calculateStock
This function takes the current stock and the number of items sold, and returns the updated stock level.

Imagination:
Imagine you’re the warehouse manager keeping track of the stock levels. The function `calculateStock

If you have 100 units in stock and sold 30 units:
*/

function calculateStock(currentStock, itemsSold) {
    return currentStock - itemsSold;
}
let updatedStock = calculateStock(100, 30);
console.log(`Updated Stock: ${updatedStock}`);
// Output: Updated Stock: 70
