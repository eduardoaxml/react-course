import React from 'react';
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch.js";
import { TodoList } from "./components/TodoList.js";
import { TodoItem } from "./components/TodoItem.js";
import { CreateTodoButton } from "./components/CreateTodoButton.js";


const todos = [
	{text:'Cortar cebolla', completed:false},
	{text:'Tormar el curso de intro a react', completed:false},
	{text:'Llorar con la llorona', completed:false}
];

function App() {
	return (
		<React.Fragment>
			<TodoCounter />
			<TodoSearch />

			<TodoList>
				{todos.map(todo => (
						<TodoItem key={todo.text} text={todo.text} />
					))
				}
			</TodoList>
			<CreateTodoButton />
		</React.Fragment>
  	);
}

export default App;
