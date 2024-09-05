/*
As an e-commerce store owner, you want to calculate the profit margin for each product. The profit margin is the difference between the selling price and the cost price, expressed as a percentage of the selling price.

Function: calculateProfitMargin
This function takes the cost price and the selling price of a product and calculates the profit margin.

Imagination:
You’re the business owner who wants to ensure you’re making a healthy profit on each sale. The calculateProfitMargin function helps you understand how much profit you’re earning as a percentage of the selling price.

If a product sells for $120 and costs $80 to produce:*/

function calculateProfitMargin(sellingPrice, costPrice) {
    let profit = sellingPrice - costPrice;
    return (profit / sellingPrice) * 100;
}
let profitMargin = calculateProfitMargin(120, 80);
console.log(`Profit Margin: ${profitMargin.toFixed(2)}%`);
// Output: Profit Margin: 33.33%
