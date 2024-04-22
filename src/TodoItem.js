import React from 'react';

const TodoItem = ({ todo, toggleTodo }) => {
  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
    </div>
  );
};

export default TodoItem;