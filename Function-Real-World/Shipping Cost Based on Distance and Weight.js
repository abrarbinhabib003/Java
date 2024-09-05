/*
In e-commerce, shipping costs are often calculated based on the distance to the delivery address and the weight of the package.

Function: calculateShippingCost
This function takes the weight of the package, the distance to the delivery address, and a shipping rate (cost per kg per km), then calculates the shipping cost.

Shipping Cost=Weight×Distance×Rate

Imagination:
You’re like a delivery service calculating the cost of transporting a package based on how heavy it is and how far it needs to go. The function calculateShippingCost determines the delivery fee.

Example:
If the package weighs 5 kg, the delivery distance is 100 km, and the rate is $0.1 per kg per km:*/

function calculateShippingCost(weight, distance, rate) {
    return weight * distance * rate;
}
let shippingCost = calculateShippingCost(5, 100, 0.1);
console.log(`Shipping Cost: $${shippingCost.toFixed(2)}`);
// Output: Shipping Cost: $50.00
