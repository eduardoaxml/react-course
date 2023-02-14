import React from 'react';
import { TodoContext } from '../components/TodoContext';
import '../css/CreateTodoButton.css';


function CreateTodoButton(){
    const { openModal, setOpenModal } = React.useContext(TodoContext);

    const onClickButton = () => {
        setOpenModal(!openModal);
    };
    return(
        <button
            className="CreateTodoButton"
            onClick={onClickButton}
        >
            +
        </button>
    );
}


export { CreateTodoButton };