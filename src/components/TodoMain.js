import React, {useState} from 'react';
import TodoInput from "./TodoInput";
import TaskList from "./TaskList";
import {nanoid} from "nanoid";
import '../App.css'

const TodoMain = () => {
    const [tasks, setTasks] = useState([])
    const addTodo = (text) => {
        const id = nanoid();
        const newTask = {id, text};
        setTasks((prev) => [newTask, ...prev]);
    }
    return (
        <div>
            <TodoInput addTodo={addTodo}/>

            <div className="tasks">
            {tasks.map((item) => (
                <TaskList task={item} key={item.id}
                deleteHandler={() => {
                    const newTasks = tasks.filter(function (el){
                        return el.id !== item.id
                    })
                    setTasks([...newTasks])}}/>))}
            </div>
        </div>
    );
};

export default TodoMain;