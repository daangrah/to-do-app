import React, {useState} from 'react';
import '../App.css'
import Delete from './assets/delete.png'
import DeleteFill from './assets/delete-filled.png'

const TaskList = ({task, deleteHandler, tasks, setTasks}) => {
    const [img, setImg] = useState({
        src: Delete
    })
    const deleted = () => {
        deleteHandler(task.id)
    }
    return (
        <div className="taskBox" id={task.id}>
            <label>
                <input type={"checkbox"}/>
            </label>
            <p>{task.text}</p>
            <img src={img.src} alt='delete' className={'delete-icon'}
            onMouseEnter={()=>{setImg({src: DeleteFill})}}
            onMouseLeave={()=>setImg({src: Delete})}
            onClick={deleted}/>
        </div>
    );
};

export default TaskList;