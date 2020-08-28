import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Components/form';
import TodoList from './Components/todoList';


function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);


  useEffect(() => {
    filterHandler();
  }, [todos, status]);


  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;

      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;

      default: 
        setFilteredTodos(todos);
        break;
    } 
  }

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
        setStatus = {setStatus}
      />
      <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
