import React from 'react';
import Task from './Task';

export const Tasks = ({ tasks, handleTaskClick, handleTaskDelete }) => {
    return (
        <>
            {tasks.map(task => (
                <Task key={task.id} task={task} handleTaskClick={handleTaskClick} handleTaskDelete={handleTaskDelete} />
            ))}
        </>
    );
};