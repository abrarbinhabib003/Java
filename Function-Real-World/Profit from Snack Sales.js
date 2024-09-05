/*
You manage a snack stall at the park, and you want to calculate how much profit you make by selling items. For this, you need to subtract the cost price from the selling price and then multiply by the number of items sold.

Function: calculateProfit
The function takes the cost price, selling price, and number of items sold to calculate the total profit.*/

/*
Imagination:
You run a snack bar, and at the end of the day, you want to figure out how much profit you made.
You use the calculateProfit function to calculate how much you earned from selling drinks after subtracting your costs.
*/
function calculateProfit(costPrice, sellingPrice, numberOfItemsSold) {
    let profitPerItem = sellingPrice - costPrice;
    return profitPerItem * numberOfItemsSold;
}

let profit = calculateProfit(2, 5, 100);
console.log(`Total Profit: $${profit}`);
// Output: Total Profit: $300
