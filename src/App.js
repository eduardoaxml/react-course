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
					/>
				))}
			</TodoList>
	
			<CreateTodoButton />
		</React.Fragment>
	);
  }
  
  export default App;