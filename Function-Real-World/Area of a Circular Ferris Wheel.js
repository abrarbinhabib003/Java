/*
Area of a Circular Ferris Wheel:
You are in charge of inspecting the park’s Ferris wheel, and you need to calculate its area for maintenance. The Ferris wheel is a circle, and the area of a circle is given by the formula:
Area = π × radius²

Function: calculateAreaOfCircle
The function takes the radius of the Ferris wheel as input and calculates the area.
*/

/*
Imagination:
You are the park engineer responsible for maintaining the Ferris wheel.
You use the calculateAreaOfCircle function to figure out how much surface area the Ferris wheel covers for your maintenance work.
*/

function calculateAreaOfCircle(radius) {
    const pi = 3.14159;
    return pi * radius * radius;
}

let ferrisWheelArea = calculateAreaOfCircle(10);
console.log(`Area of the Ferris Wheel: ${ferrisWheelArea} square meters`);
// Output: Area of the Ferris Wheel: 314.159 square meters
