function calculateBMI(weight, height) {
    return weight / (height * height);
}
let bmi = calculateBMI(70, 1.75);
console.log(`BMI: ${bmi.toFixed(2)}`);
// Output: BMI: 22.86
