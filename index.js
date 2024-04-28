#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log("=".repeat(40));
console.log(chalk.bold.green(" \tWelcome to Word Counter\t "));
console.log("=".repeat(40));
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.blue("write a sentence")
    }
]);
let words = answers.sentence.trim().split(" ");
console.log(chalk.blue("Sentence words"));
console.log(words);
console.log(chalk.bold(`\n Word Count: ${chalk.yellow(words.length)}\n `));
