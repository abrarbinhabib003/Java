/*
Now, imagine you're managing one of the popular rides at the park, and you want to know the average time people spend on the ride. You have the time spent on the ride by several visitors.

Function: calculateAverageTime
The function takes an array of times (minutes) and calculates the average.
*/

/*
Imagination:
You work at the ride control room and track how long each person stays on the ride.
At the end of the day, you use the calculateAverageTime function to find out the average time spent on the ride.
*/
function calculateAverageTime(times) {
    let total = 0;
    for (let time of times) {
        total += time;
    }
    return total / times.length;
}

let timesOnRide = [10, 12, 8, 14, 9];
let averageTime = calculateAverageTime(timesOnRide);
console.log(`Average Ride Time: ${averageTime} minutes`);
// Output: Average Ride Time: 10.6 minutes
