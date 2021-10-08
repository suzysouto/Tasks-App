import React from 'react';
import * as B from './Container';
import { CgClose, CgInfo } from 'react-icons/cg';
import { useHistory } from 'react-router-dom';

const Task = ({ task, handleTaskClick, handleTaskDelete }) => {
    const history = useHistory();

    const handleTaskDetails = () => {
        history.push(`/${task.title}`);
    };

    return (
        <B.TaskStyled style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}>
            <div onClick={() => handleTaskClick(task.id)}>{task.title}</div>
            <B.InfoDeleteButtonStyled>
                <button onClick={handleTaskDetails}><CgInfo /></button>
                <button onClick={() => handleTaskDelete(task.id)}><CgClose /></button>
            </B.InfoDeleteButtonStyled>
        </B.TaskStyled>
    );
}
 
export default Task;