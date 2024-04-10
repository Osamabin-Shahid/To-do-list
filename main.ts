#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"
console.log(chalk.underline.bold.bgRed("==============================>>Welcome to my To-Do list App<<=================================="));

let todos : string[] = [];
let condition : boolean = true;

while (condition){
let addTask = await inquirer.prompt(
    [
    {
        name : "todo",
        type : "input",
        message : "What do you want to add in your todos"

    },
    {
        name : "addmore",
        type : "confirm",
        message : "Do you want to add more",
        default : "false",
    }
]);

todos.push(addTask.todo);
condition =addTask.addmore;
console.log(chalk.bold.yellow(todos));

};