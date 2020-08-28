import React, {useState} from 'react';
import './App.css';
import Form from './Components/form';
import TodoList from './Components/todoList';


function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h2>To-do List {inputText}</h2>
      </header>
      <Form 
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
      />
      <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
