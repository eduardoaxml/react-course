import React from 'react';
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch.js";
import { TodoList } from "./components/TodoList.js";
import { TodoItem } from "./components/TodoItem.js";
import { CreateTodoButton } from "./components/CreateTodoButton.js";


const todos = [
	{ text: 'Create new component', completed: true },
	{ text: 'Change status on Jira', completed: false },
	{ text: 'Improve application UI', completed: false },
];

function App() {
	return (
		<React.Fragment>
			<TodoCounter />
			<TodoSearch />

			<TodoList>
				{todos.map(
					todo=>(
						<TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
					)
				)}
			</TodoList>
			<CreateTodoButton />
		</React.Fragment>
  	);
}

export default App;