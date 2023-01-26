import React from 'react';
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch.js";
import { TodoList } from "./components/TodoList.js";
import { TodoItem } from "./components/TodoItem.js";
import { CreateTodoButton } from "./components/CreateTodoButton.js";


const defaultTodos = [
	{ text: 'Create new component', completed: true },
	{ text: 'Change status on Jira', completed: false },
	{ text: 'Improve application UI', completed: false },
];

function App() {
	const [todos, setTodos] = React.useState(defaultTodos);
	const [searchValue, setSearchValue] = React.useState('');
	// !! verdadero
	const completedTodos = todos.filter(todo => !!todo.completed).length;
	const totalTodos = todos.length;
  
	let searchedTodos = [];
  
	if (!searchValue.length >= 1) {
		searchedTodos = todos;
	} else {
		searchedTodos = todos.filter(todo => {
			const todoText = todo.text.toLowerCase();
			const searchText = searchValue.toLowerCase();
			return todoText.includes(searchText);
		});
	}
	
	// 
	const completeTodo = (text) => {
		const todoIndex = todos.findIndex(todo => todo.text === text);
		const newTodos = [...todos]; // clonacion de todos
		newTodos[todoIndex].completed = true; // marca en true el todo que cumple con el filtro todoIndex
		setTodos(newTodos); // actualizamos para poder renderizar la app
	};
  
	const deleteTodo = (text) => {
		const todoIndex = todos.findIndex(todo => todo.text === text);
		const newTodos = [...todos];
		newTodos.splice(todoIndex, 1);
		setTodos(newTodos);
	};
	
	return (
	  	<React.Fragment>
			<TodoCounter
				total={totalTodos}
				completed={completedTodos}
			/>
			<TodoSearch
				searchValue={searchValue}
				setSearchValue={setSearchValue}
			/>
	
			<TodoList>
				{searchedTodos.map(todo => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				))}
			</TodoList>
	
			<CreateTodoButton />
	  	</React.Fragment>
	);
  }
  
  export default App;