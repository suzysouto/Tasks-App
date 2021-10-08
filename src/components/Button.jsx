import React from 'react'
import { ButtonStyled } from './Container';

const Button = ({ children, onClick }) => {
    return ( 
        <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
    );
}
 
export default Button;