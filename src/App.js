import React, {useState} from 'react';
import './App.css';
import Form from './Components/form';
import TodoList from './Components/todoList';


function App() {
  const [inputText, setInputText] = useState('');
  
  return (
    <div className="App">
      <header>
        <h2>To-do list</h2>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
