import React, { useState } from 'react';
import Button from './Button';
import * as A from './Container';

const AddTask = ({ handleTaskAddition }) => {
    const [addTask, setAddTask] = useState('');

    const handleInputChange = (e) => {
        setAddTask(e.target.value);
    };

    const handleAddTaskClick = () => {
        handleTaskAddition(addTask);
        setAddTask('');
    };

    return ( 
        <A.AddTaskStyledContainer>
            <A.AddTaskStyled onChange={handleInputChange} value={addTask} type="text" /> 
            <A.ButtonContainerStyled>
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </A.ButtonContainerStyled>
        </A.AddTaskStyledContainer>
    );
}
 
export default AddTask;