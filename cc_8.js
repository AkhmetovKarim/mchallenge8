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

//Task 3
let calculateServiceFee = (amount, serviceType) => { //write an arrow function 
    let feeRate = 0;
    if (serviceType === "Premium") {
        feeRate = 0.15;
    } else if (serviceType === "Standard") {
        feeRate = 0.10;
    } else if (serviceType === "Basic") {
        feeRate = 0.05;
    }
    let fee = amount * feeRate;
    return `Service Fee: $${fee.toFixed(2)}`;
};
console.log(calculateServiceFee(200, "Premium")); //logs
console.log(calculateServiceFee(500, "Standard"));

//Task 4
function calculateRentalCost(days, carType, insurance = false) { //write a function 
    let dailyRate = 0;
    if (carType === "Economy") { //economy = 40 bucks a day
        dailyRate = 40;
    } else if (carType === "Stadard") { //standad = 60 bucks a day
        dailyRate = 60;
    } else if (carType === "Luxury") { //luxury = 100 bucks a day
        dailyRate = 100; 
    }
    let totalCost = days * dailyRate;
    if (insurance) {
        totalCost += days * 20;
    }
    return `Total Rental Cost: $${totalCost}`;
}
console.log(calculateRentalCost(3, "Economy", true)); //logs
console.log(calculateRentalCost(5, "Luxury", false));