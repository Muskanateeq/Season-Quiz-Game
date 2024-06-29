#! /usr/bin/env node

// season Quiz Game
import inquirer from "inquirer"
import chalk from "chalk"

let answer = await inquirer.prompt([
   {Message:"Enter SeasonName", Type: "string", name: "SeasonName"},
   {
    message: "Please choose 1st condition according to season",
    type: "list",
    name: "condition1",
    choices:["season is very hot","season is very cold","season is dry & leaves fall","season is warm"]
   },
   {
    message: "Please choose 2nd condition according to season",
    type: "list",
    name: "condition2",
    choices:["season comes after spring","season comes after autumn","season comes after summer","season comes after winter"]
   },
]);
// swith statement
let season = answer.SeasonName
let condition1 = answer.condition1
let condition2 = answer.condition2
switch (season) {
    case "summer":
        if (condition1 === "season is very hot" && condition2 === "season comes after spring"){
            console.log(chalk.cyan(`${season} ${condition1}`),"is",chalk.green("true"));
            console.log(chalk.cyan(`${season} ${condition2}`),"is",chalk.green("true"));
            console.log(chalk.green("Well done!"));
        }else if (condition1 === "season is very hot" && condition2 !== "season comes after spring") {
            console.log(chalk.cyan(`${season} ${condition1}`),"is",chalk.green("true"));
            console.log(chalk.cyan(`${season} ${condition2}`),"is",chalk.red("false"));
        }else if (condition1 !== "season is very hot" && condition2 === "season comes after spring") {
            console.log(chalk.cyan(`${season} ${condition1}`),"is",chalk.red("false"));
            console.log(chalk.cyan(`${season} ${condition2}`),"is",chalk.green("true"));
        }else {
            console.log(chalk.cyan(`${season} ${condition1}`),"is",chalk.red("false"));
            console.log(chalk.cyan(`${season} ${condition2}`),"is",chalk.red("false")); 
            console.log(chalk.red("oops! Try better luck for next time"));
              
        }
        break;
    case "winter":
        if (condition1 === "season is very cold" && condition2 === "season comes after autumn"){
            console.log(chalk.cyan(`${season} ${condition1}`),"is",chalk.green("true"));
            console.log(chalk.cyan(`${season} ${condition2}`),"is",chalk.green("true"));
            console.log(chalk.green("Well done!"));
        }else if (condition1 === "season is very cold" && condition2 !== "season comes after autumn") {
            console.log(chalk.cyan(`${season} ${condition1}`),"is",chalk.green("true"));
            console.log(chalk.cyan(`${season} ${condition2}`),"is",chalk.red("false"));
        }else if (condition1 !== "season comes after cold" && condition2 === "season comes after autumn") {
            console.log(chalk.cyan(`${season} ${condition1}`),"is",chalk.red("false"));
            console.log(chalk.cyan(`${season} ${condition2}`),"is",chalk.green("true"));
        }else {
            console.log(chalk.cyan(`${season} ${condition1}`),"is",chalk.green("false"));
            console.log(chalk.cyan(`${season} ${condition2}`),"is",chalk.red("false"));
            console.log(chalk.red("oops! Try better luck for next time"));
            
        }
        break;
    case "autumn":
        if (condition1 === "season is dry & leaves fall" && condition2 === "season comes after summer"){
            console.log("you are correct");
            console.log(chalk.cyan(`${season} ${condition1}`),"is",chalk.green("true"));
            console.log(chalk.cyan(`${season} ${condition2}`),"is",chalk.green("true"));
            console.log(chalk.green("Well done!"));
        }else if (condition1 === "season is dry & leaves fall " && condition2 !== "season comes after summer") {
            console.log(chalk.cyan(`${season} ${condition1}`),"is",chalk.green("true"));
            console.log(chalk.cyan(`${season} ${condition2}`),"is",chalk.red("false"));
        }else if (condition1 !== "season is dry & leaves fall" && condition2 === "season comes after summer") {
            console.log(chalk.cyan(`${season} ${condition1}`),"is",chalk.red("false"));
            console.log(chalk.cyan(`${season} ${condition2}`),"is",chalk.green("true"));
        }else {
            console.log(chalk.cyan(`${season} ${condition1}`),"is",chalk.red("false"));
            console.log(chalk.cyan(`${season} ${condition2}`),"is",chalk.red("false"));
            console.log(chalk.red("oops! Try better luck for next time"));
            
        }
        break;
    case "spring":
        if (condition1 === "season is warm" && condition2 === "season comes after winter"){
            console.log(chalk.cyan(`${season} ${condition1}`),"is",chalk.green("true"));
            console.log(chalk.cyan(`${season} ${condition2}`),"is",chalk.green("true"));
            console.log(chalk.green("Well done!"));
        }else if (condition1 === "season is warm" && condition2 !== "season comes after winter") {
            console.log(chalk.cyan(`${season} ${condition1}`),"is",chalk.green("true"));
            console.log(chalk.cyan(`${season} ${condition2}`),"is",chalk.red("false"));
        }else if (condition1 !== "season is warm" && condition2 === "season comes after winter") {
            console.log(chalk.cyan(`${season} ${condition1}`),"is",chalk.red("false"));
            console.log(chalk.cyan(`${season} ${condition2}`),"is",chalk.green("true"));
        }else {
            console.log(chalk.cyan(`${season} ${condition1}`),"is",chalk.red("false"));
            console.log(chalk.cyan(`${season} ${condition2}`),"is",chalk.red("false"));
            console.log(chalk.red("oops! Try better luck for next time"));
        }
        break;
        default:
            console.log(chalk.red("Invalid SeasonName"));
        break;
}