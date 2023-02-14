import React from 'react';
import { TodoContext } from '../components/TodoContext';
import '../css/TodoSearch.css';


function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    // ['variable donde guarda el valor', 'funcion para actualizar el valor '] = creamos un estado que por defecto será un valor vacío
    // const [searchValue, setSearchValue] = React.useState('');

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };
    return ( 
        <input
            className="TodoSearch"
            placeholder="Cebolla"
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
}
export { TodoSearch };