import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <TodoItem todo={todo} toggleTodo={toggleTodo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
