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

//Task 5
function calculateLoanPayment(principal, rate, time) { //write a function 
    let totalPayment = principal + (principal * rate * time); //formula
    return `Total Payment: $${totalPayment.toFixed(2)}`;
}
console.log(calculateLoanPayment(1000, 0.05, 2)); //logs
console.log(calculateLoanPayment(5000, 0.07, 3));

//Task 6
function filterLargeTransactions(transactions, filterFunction) { //write a high order functiion
    return transactions.filter(filterFunction);
}
let transactions = [200, 1500, 3200, 800, 2500]; //declare an array with five values
console.log(filterLargeTransactions(transactions, amount => amount > 1000)); //log

//Task 7
function createCartTracker() { //write a function that returns another function
let total = 0;
return function (price) {
    total += price;
    return `Total Cart Value: $${total}`;
};
}
let cart = createCartTracker();
console.log(cart(20)); //log
console.log(cart(35));

//Task 8
function calculateSavings(years, amount) {
    if (years >= 10) { //stop recursion when years reach 10
        return `Projected Savings: $${amount.toFixed(2)}`;
    }
    return calculateSavings(years + 1, amount * 1.05);
}
console.log(calculateSavings(8, 1000)); //logs
console.log(calculateSavings(5, 5000));
