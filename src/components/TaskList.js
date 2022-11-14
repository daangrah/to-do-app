import React from 'react';
import '../App.css'

const TaskList = ({task}) => {

    return (
        <div className="taskBox">
            <p>{task.text}</p>
        </div>
    );
};

export default TaskList;