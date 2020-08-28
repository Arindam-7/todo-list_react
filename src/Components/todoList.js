import React from 'react';
import Todo from './todo';


const TodoList = (props) => {
    return(
        <div className="todo-container">
        <ul className="todo-list">
          {props.filteredTodos.map(todo => (
            <Todo
              todo={todo}
              todos={props.todos}
              setTodos={props.setTodos} 
              text={todo.text} 
              key={todo.id} 
            />
          ))}
        </ul>
      </div>
    );
}

export default TodoList;