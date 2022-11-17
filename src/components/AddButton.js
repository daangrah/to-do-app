import React from 'react';

const AddButton = (props) =>{
    function AddHandler(){
        if(props.value.trim()) {
            props.addTodo(props.value.trim())
            props.setValue('')
        }

    }
    return (
        <button type="button" onClick={AddHandler}>
            ADD
        </button>
    );
};

export default AddButton;