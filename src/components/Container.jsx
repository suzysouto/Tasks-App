import styles from 'styled-components';

export const ContainerStyled = styles.div`
    max-width: 500px;
    margin: 30px auto;
    overflow: auto;
    min-height: 300px;
    border: 2px solid chartreuse;
    padding: 30px;
    border-radius: 10px;
`;

export const TaskStyled = styles.div`
    background-color: #444;
    margin: 8px 0;
    padding: 15px 20px;
    display: flex;
    border-radius: 5px;
    justify-content: space-between;
    color: #eee;
    align-items: center;

    & div {
        cursor: pointer;
    }

    & button {
        border: none;
        font-size: 24px;
        color: chartreuse;
        background-color: #444;
        cursor: pointer;
        margin: 0 5px;
    }
`;

export const AddTaskStyledContainer = styles.div`
    margin: 15px 0;
    width: 100%;
    display: flex;
`;

export const AddTaskStyled = styles.input`
    height: 40px;
    padding: 0 10px;
    border-radius: 5px;
    border: none;
    flex: 2;
    background-color: #444;
    color: #eee;
    font-size: 16px;
`;

export const ButtonStyled = styles.button`
    background-color: chartreuse;
    height: 40px;
    padding: 0 10px;
    border-radius: 5px;
    width: 100%;
    font-size: 16px;
    color: #444;
    font-weight: bold;
    cursor: pointer;
    border: none;
    transition: all 0.5s ease;

    &:hover {
        color: chartreuse;
        background-color: #444;
    }
`;

export const ButtonContainerStyled = styles.div`
    margin-left: 10px;
    flex: 1;
`;

export const HeaderStyled = styles.h1`
    color: #eee;
`;

export const DetailsContainerStyled = styles.div`
    background-color: #444;
    margin: 15px 0;
    padding 15px 20px;
    display: flex;
    flex-direction: column;
    color: #eee;
    border-radius: 5px;

    & h2 {
        margin-bottom: 5px;
        color: chartreuse;
    }
`;

export const BackButtonStyled = styles.div`
    width: 30%;
    margin-top: 10px;
`;

export const InfoDeleteButtonStyled = styles.div`
    width: 30%;
    display: flex;
    justify-content: flex-end;
`;