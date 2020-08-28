import React from 'react';
import Todo from './todo';


const TodoList = (props) => {
    return(
        <div className="todo-container">
        <ul className="todo-list">
          {props.todos.map(todo => (
            <Todo
              todo={todo}
              todos={props.todos}
              setTodos={props.setTodos} 
              text={todo.text} 
              id={todo.id} 
            />
          ))}
        </ul>
      </div>
    );
}

export default TodoList;