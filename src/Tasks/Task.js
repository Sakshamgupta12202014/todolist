import './Task.css';
import { formatDate } from '../Dateformatter';
import { useState } from 'react';

const Task = (props) => {

    const [isRemoved , setRemoved] = useState(false);

	const remTask = () => {
		setRemoved(!isRemoved);
		
	}

    return (
        
        <div className={`tasks ${isRemoved ? "removedTasks": "tasks"}`}>
            <div>
                <h3>Task Added</h3>
                <p><b>Created Date : </b>{formatDate(props.task.date)}</p>
                <p><b>Title : </b>{props.task.title}</p>
                <p><b>Description :</b> {props.task.description}</p>
            </div>

            <div className='buttonSection'>
                <button className='removeButton' onClick={remTask}>Remove Task</button>
            </div>

        </div>
        
    );
}

export default Task;