#!/usr/bin/env node

import inquirer from "inquirer";

const currency: any = {
    USD: 1,
    EURO: 301.16,
    POUND: 351.22,
    INR: 74.57,
    PKR: 280
}

async function convertCurrency() {
    let userAnswer = await inquirer.prompt([{
        name: "from",
        type: "list",
        message: "From which currency do you want to convert?",
        choices: Object.keys(currency)
    },
    {
        name: "to",
        type: "list",
        message: "To which currency do you want to convert?",
        choices: Object.keys(currency)
    },
    {
        name: "amount",
        type: "number",
        message: "How much currency do you want to convert?"
    }]);

    let result = calculateConversion(userAnswer.from, userAnswer.to, userAnswer.amount);

    console.log(result);
}

function calculateConversion(from: string, to: string, amount: number) {
    let fromAmount = currency[from];
    let toAmount = currency[to];
    let result;

    switch (from) {
        case "USD":
            result = amount / fromAmount * toAmount;
            break;
        case "EURO":
            result = amount / fromAmount * toAmount;
            break;
        case "POUND":
            result = amount / fromAmount * toAmount;
            break;
        case "INR":
            result = amount / fromAmount * toAmount;
            break;
        case "PKR":
            result = amount / fromAmount * toAmount;
            break;
        default:
            result = "Invalid currency";
    }

    return result;
}

convertCurrency();
