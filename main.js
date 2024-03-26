#! usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
const atmPin = 2006;
let answerPin = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your four digit pin: ",
        type: "number"
    }
]);
if (answerPin.pin === atmPin) {
    console.log("Your Pin Is Correct!!!");
    let doOperation = await inquirer.prompt([
        {
            name: "action",
            message: "What do you want to do?",
            type: "list",
            choices: ["Withdraw", "Check Balance"]
        }
    ]);
    if (doOperation.action == "Withdraw") {
        let amount = await inquirer.prompt([{
                name: "amount",
                message: "Select amount which you want to withdraw:",
                type: "list",
                choices: ["500", "1000", "5000", "10000", "25000", "50000"]
            }]);
        if (amount.amount > myBalance) {
            console.log(`You don't have enough amount. Your current balance is: ${myBalance}`);
        }
        else if (amount.amount == "500") {
            myBalance -= amount.amount;
            console.log(`Receive your Rs.${amount.amount} cash, Thank you for your transaction :)`);
            console.log(`Your remaining balance after transaction is: ${myBalance}`);
        }
        else if (amount.amount == "1000") {
            myBalance -= amount.amount;
            console.log(`Receive your Rs.${amount.amount} cash, Thank you for your transaction :)`);
            console.log(`Your remaining balance after transaction is: ${myBalance}`);
        }
        else if (amount.amount == "5000") {
            myBalance -= amount.amount;
            console.log(`Receive your Rs.${amount.amount} cash, Thank you for your transaction :)`);
            console.log(`Your remaining balance after transaction is: ${myBalance}`);
        }
        else if (amount.amount == "10000") {
            myBalance -= amount.amount;
            console.log(`Receive your Rs.${amount.amount} cash, Thank you for your transaction :)`);
            console.log(`Your remaining balance after transaction is: ${myBalance}`);
        }
        else if (amount.amount == "25000") {
            myBalance -= amount.amount;
            console.log(`Receive your Rs.${amount.amount} cash, Thank you for your transaction :)`);
            console.log(`Your remaining balance after transaction is: ${myBalance}`);
        }
        else {
            myBalance -= amount.amount;
            console.log(`Receive your Rs.${amount.amount} cash, Thank you for your transaction :)`);
            console.log(`Your remaining balance after transaction is: ${myBalance}`);
        }
    }
    if (doOperation.action == "Check Balance") {
        console.log(`Your current balance is: ${myBalance}`);
    }
}
else {
    console.log("Incorrect Pin. Please enter correct pin.");
}
