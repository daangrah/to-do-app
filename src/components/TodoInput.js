import React, {useState} from 'react';
import AddButton from "./AddButton";
import '../App.css'

const TodoInput = ({addTodo}) => {
    const [value, setValue] = useState('')
    const enterHandler = (e) => {
       if (e.key === "Enter" && value.trim()) {
           addTodo(value.trim());
           setValue('');
       }
    }
    const changed = (e) => (setValue(e.target.value))
    return (
        <div className="Main">
        <input className="input-area"
               placeholder="Enter your task..."
               type="text"
               value={value}
               onChange={changed}
               onKeyDown={enterHandler}
        />
            <AddButton addTodo={addTodo} value={value} setValue={setValue}/>
        </div>
    );
};

export default TodoInput;