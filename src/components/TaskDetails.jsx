import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from './Button';
import * as D from './Container';

const TaskDetails = () => {
    const params = useParams();

    const history = useHistory();

    const handleBackButton = () => {
        history.goBack();
    };

    return ( 
        <>
            <D.BackButtonStyled>
                <Button onClick={handleBackButton}>Voltar</Button>
            </D.BackButtonStyled>
            <D.DetailsContainerStyled>
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum tellus enim sit hendrerit quis nullam cras sodales, vehicula lectus fusce 
                   elementum ornare felis dictum.</p>
            </D.DetailsContainerStyled>
        </>
    );
}
 
export default TaskDetails;