/*
Percentage of Visitors on Each Ride:
You’re tasked with calculating the percentage of visitors that went on different rides during the day. You have the total number of visitors and how many went on a specific ride.

Function: calculatePercentage
The function will calculate what percentage of the total visitors went on a specific ride.
*/
/*Imagination:
You work in the theme park’s management office, keeping track of how many people visited each ride.
At the end of the day, you use the calculatePercentage function to figure out what percentage of the visitors rode the roller coaster.*/

function calculatePercentage(part, total) {
    return (part / total) * 100;
}

let percentage = calculatePercentage(600, 2000);
console.log(`Percentage of visitors on the roller coaster: ${percentage}%`);
// Output: Percentage of visitors on the roller coaster: 30%
