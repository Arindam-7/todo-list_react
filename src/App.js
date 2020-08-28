import React, {useState} from 'react';
import './App.css';
import Form from './Components/form';
import TodoList from './Components/todoList';


function App() {
  const [inputText, setInputText] = useState('');

  return (
    <div className="App">
      <header>
        <h2>To-do List {inputText}</h2>
      </header>
      <Form setInputText={setInputText} />
      <TodoList />
    </div>
  );
}

export default App;
