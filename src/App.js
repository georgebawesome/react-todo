import React, { useState } from 'react';
import './App.css';
//importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

//renderinf part
function App() {
	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);
	return (
		<div className='App'>
			<header>
				<h1>George's Todo List</h1>
			</header>
			<Form
				inputText={inputText}
				todos={todos}
				setTodos={setTodos}
				setInputText={setInputText}
			/>
			<TodoList />
		</div>
	);
}
export default App;
