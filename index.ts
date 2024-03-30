#! usr/bin/env node
import inquirer from "inquirer";

let myBalance: number = 10000;


const atmPin: number = 2006;

let answerPin = await inquirer.prompt
    (
        [
            {
                name: "pin",
                message: "Enter Your four digit pin: ",
                type: "number"
            }])

if (answerPin.pin === atmPin) {
    console.log("Your Pin Is Correct!!!");

    let selectAccount = await inquirer.prompt
        (
            [
                {
                    name: "account",
                    type: "list",
                    message: "Please, Select the account",
                    choices: ["Current Account", "Savings Account"]
                }
            ]
        )
    if (selectAccount.account == "Current Account" || "Savings Account") {
        let doOperation = await inquirer.prompt
            (
                [
                    {
                        name: "action",
                        message: "What do you want to do?",
                        type: "list",
                        choices: ["Withdraw", "Check Balance"]
                    }])
        if (doOperation.action == "Withdraw") {
            let withdrawOpt = await inquirer.prompt
                (
                    [
                        {
                            name: "withopt",
                            type: "list",
                            message: "Select withdraw process",
                            choices: ["Cash Withdrawl", "Fast Cash"]
                        }
                    ]
                )
            if (withdrawOpt.withopt == "Fast Cash") {
                let amount = await inquirer.prompt([{
                    name: "amount",
                    message: "Select amount which you want to withdraw:",
                    type: "list",
                    choices: ["500", "1000", "5000", "10000", "25000", "50000"]
                }])
                if (amount.amount > myBalance) {
                    console.log(`You don't have enough amount. Your current balance is: ${myBalance}`);
                } else if (amount.amount == "500") {
                    myBalance -= amount.amount
                    let passCash = await inquirer.prompt(
                        [
                            {
                                name: "cash",
                                message: "Do you want to pass or cash or not?",
                                type: "list",
                                choices: ["Yes", "No"]
                            }])
                    if (passCash.cash == "Yes") {
                        console.log(`Receive your Rs.${amount.amount} cash, Thank you for your transaction :)`);
                        console.log(`Your remaining balance after transaction is: ${myBalance}`);
                    } else {
                        console.log("Your transaction has been returned back.")
                    }
                } else if (amount.amount == "1000") {
                    myBalance -= amount.amount
                    let passCash = await inquirer.prompt(
                        [
                            {
                                name: "cash",
                                message: "Do you want to pass your cash or not?",
                                type: "list",
                                choices: ["Yes", "No"]
                            }])
                    if (passCash.cash == "Yes") {
                        console.log(`Receive your Rs.${amount.amount} cash, Thank you for your transaction :)`);
                        console.log(`Your remaining balance after transaction is: ${myBalance}`);
                    } else {
                        console.log("Your transaction has been returned back.")
                    }
                } else if (amount.amount == "5000") {
                    myBalance -= amount.amount
                    let passCash = await inquirer.prompt(
                        [
                            {
                                name: "cash",
                                message: "Do you want to pass or cash or not?",
                                type: "list",
                                choices: ["Yes", "No"]
                            }])
                    if (passCash.cash == "Yes") {
                        console.log(`Receive your Rs.${amount.amount} cash, Thank you for your transaction :)`);
                        console.log(`Your remaining balance after transaction is: ${myBalance}`);
                    } else {
                        console.log("Your transaction has been returned back.")
                    }
                } else if (amount.amount == "10000") {
                    myBalance -= amount.amount
                    let passCash = await inquirer.prompt(
                        [
                            {
                                name: "cash",
                                message: "Do you want to pass or cash or not?",
                                type: "list",
                                choices: ["Yes", "No"]
                            }])
                    if (passCash.cash == "Yes") {
                        console.log(`Receive your Rs.${amount.amount} cash, Thank you for your transaction :)`);
                        console.log(`Your remaining balance after transaction is: ${myBalance}`);
                    } else {
                        console.log("Your transaction has been returned back.")
                    }
                } else if (amount.amount == "25000") {
                    myBalance -= amount.amount
                    let passCash = await inquirer.prompt(
                        [
                            {
                                name: "cash",
                                message: "Do you want to pass or cash or not?",
                                type: "list",
                                choices: ["Yes", "No"]
                            }])
                    if (passCash.cash == "Yes") {
                        console.log(`Receive your Rs.${amount.amount} cash, Thank you for your transaction :)`);
                        console.log(`Your remaining balance after transaction is: ${myBalance}`);
                    } else {
                        console.log("Your transaction has been returned back.")
                    }
                } else {
                    myBalance -= amount.amount

                    let passCash = await inquirer.prompt(
                        [
                            {
                                name: "cash",
                                message: "Do you want to pass or cash or not?",
                                type: "list",
                                choices: ["Yes", "No"]
                            }])
                    if (passCash.cash == "Yes") {
                        console.log(`Receive your Rs.${amount.amount} cash, Thank you for your transaction :)`);
                        console.log(`Your remaining balance after transaction is: ${myBalance}`);
                    } else {
                        console.log("Your transaction has been returned back.")
                    }
                }
            } else {
                let cashNum = await inquirer.prompt
                    (
                        [
                            {
                                name: "cash",
                                message: "Enter Your amount: ",
                                type: "number"
                            }])
                            myBalance -= cashNum.cash

                    let passCash = await inquirer.prompt(
                        [
                            {
                                name: "cash",
                                message: "Do you want to pass or cash or not?",
                                type: "list",
                                choices: ["Yes", "No"]
                            }])
                    if (passCash.cash == "Yes") {
                        console.log(`Receive your Rs.${cashNum.cash} cash, Thank you for your transaction :)`);
                        console.log(`Your remaining balance after transaction is: ${myBalance}`);
                    } else {
                        console.log("Your transaction has been returned back.")
                    }
            }
        }
        if (doOperation.action == "Check Balance") {
            console.log(`Your current balance is: ${myBalance}`);
        }
    }
}
else {
    console.log("Incorrect Pin. Please enter correct pin.");
}
