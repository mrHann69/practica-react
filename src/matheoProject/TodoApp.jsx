import { useState } from "react";
import TodoCardCmp from "./components/cpm-card";

const todolistarray = [<TodoCardCmp key={0} nameTodo="comer" />,
                        <TodoCardCmp key={1} nameTodo="beber" />,
                        <TodoCardCmp key={2} nameTodo="estudiar" />];

const TodoApp = () => {

    const [todoCmpArray, setTodoCmpArray] = useState(todolistarray);

    const todoAdd = () => {
        const name = document.getElementById("text-todo").value;
        const newTodoArray = [...todoCmpArray, <TodoCardCmp key={todoCmpArray.length} nameTodo={name} />]
        setTodoCmpArray(newTodoArray);
    }

    // const todoDelete = (idTodo) => {
    //     const newTodoArray = todoCmpArray.map(item => item.key !== idTodo);
    //     setTodoCmpArray(newTodoArray);
    //     console.log(newTodoArray);
    // }

    return (

        <div id="todolist">
            
            <h1>Matheo's ToDo List</h1>
            <h2>task form</h2>
            <form id="input-form">
                <input type="text" id="text-todo" placeholder="task to be done" />
                <button type="button" onClick={todoAdd}>Add</button>
            </form>

            <ul> { todoCmpArray } </ul>
           
        </div>
    );
}



export default TodoApp;