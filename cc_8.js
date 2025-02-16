//Task 1
function calculateSalary(baseSalary, bonus, taxRate) { //write a function
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    return `Net Salary: $${netSalary.toFixed(2)}`;
}
console.log(calculateSalary(5000, 500, 0.1)); //logs
console.log(calculateSalary(7000, 1000, 0.15));

//Task 2
let calculateDiscount = function(price, discountRate) { //declare a function exression
    let finalPrice = price - (price * discountRate);
    return `Final Price: $${finalPrice.toFixed(2)}`; //to two decimals
};
console.log(calculateDiscount(100, 0.2)); //logs
console.log(calculateDiscount(250, 0.15));