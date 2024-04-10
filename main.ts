#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"
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
console.log(todos);

};