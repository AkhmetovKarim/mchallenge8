//Task 1
function calculateSalary(baseSalary, bonus, taxRate) { //write a function
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    return `Net Salary: $${netSalary.toFixed(2)}`;
}
console.log(calculateSalary(5000, 500, 0.1)); //logs
console.log(calculateSalary(7000, 1000, 0.15));