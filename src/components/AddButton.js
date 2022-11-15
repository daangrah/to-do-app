import React from 'react';
import '../App.css'

const AddButton = (props) =>{
    function AddHandler(){
        if(props.value.trim()) {
            props.addTodo(props.value.trim())
            props.setValue('')
        }

    }
    return (
        <button className="addButton" type="button" onClick={AddHandler}>
            ADD
        </button>
    );
};

export default AddButton;