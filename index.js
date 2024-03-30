import inquirer from "inquirer";
let todos = [];
async function createTodo(todos) {
    do {
        let ans = await inquirer.prompt([
            {
                type: "list",
                name: "select",
                choices: ["add", "delete", "update", "view"],
                message: "select opearation"
            }
        ]);
        if (ans.select == "add") {
            let addTodo = await inquirer.prompt({
                name: "todo",
                type: "input",
                message: "add item",
            });
            todos.push(addTodo.todo);
            console.log(todos);
        }
        if (ans.select == "update") {
            let updateTodo = await inquirer.prompt([
                {
                    name: "todo",
                    type: "input",
                    message: "which element",
                    choices: todos.map(item => item)
                }
            ]);
            let addTodo = await inquirer.prompt({
                name: "todo",
                type: "input",
                message: "add item",
            });
            let newTodos = todos.filter(val => val !== updateTodo.todo);
            todos = [...newTodos, addTodo.todo];
            console.log(todos);
        }
        if (ans.select == "view") {
            console.log(todos);
        }
        if (ans.select == "delete") {
            let deleteTodo = await inquirer.prompt([
                {
                    name: "todo",
                    type: "input",
                    message: "which element",
                    choices: todos.map(item => item)
                }
            ]);
            let newTodos = todos.filter(val => val !== deleteTodo.todo);
            todos = [...newTodos];
            console.log(todos);
        }
    } while (true);
}
createTodo(todos);
