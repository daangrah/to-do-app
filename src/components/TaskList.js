import React, {useState} from 'react';
import '../App.css'
import Delete from './assets/delete.png'
import DeleteFill from './assets/delete-filled.png'

const TaskList = ({task, tasks, setTasks}) => {
    const [img, setImg] = useState({
        src: Delete
    })
    const handlerDelete = () => {
        tasks.forEach(function (el, i){
            if(el.id === task.id) {tasks.splice(i,1)}
            setTasks(tasks)
            console.log(tasks)
    })}
    return (
        <div className="taskBox" id={task.id}>
            <label>
                <input type={"checkbox"}/>
            </label>
            <p>{task.text}</p>
            <img src={img.src} alt='delete' className={'delete-icon'}
            onMouseEnter={()=>{setImg({src: DeleteFill})}}
            onMouseLeave={()=>setImg({src: Delete})}
            onClick={handlerDelete}/>
        </div>
    );
};

export default TaskList;