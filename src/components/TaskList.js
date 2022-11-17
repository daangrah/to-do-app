import React from 'react';
import '../App.css'

<<<<<<< HEAD
const TaskList = ({task, deleteHandler, tasks, setTasks}) => {
    const [img, setImg] = useState({
        src: Delete
    })
    const deleted = () => {
        deleteHandler(task.id)
    }
=======
const TaskList = ({task}) => {

>>>>>>> parent of a8296a4 (delete butt and styles)
    return (
        <div className="taskBox">
            <p>{task.text}</p>
<<<<<<< HEAD
            <img src={img.src} alt='delete' className={'delete-icon'}
            onMouseEnter={()=>{setImg({src: DeleteFill})}}
            onMouseLeave={()=>setImg({src: Delete})}
            onClick={deleted}/>
=======
>>>>>>> parent of a8296a4 (delete butt and styles)
        </div>
    );
};

export default TaskList;