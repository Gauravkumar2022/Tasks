import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from './actions';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const TodoApp = ({ todos, addTodo, toggleTodo }) => {
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = {
  addTodo,
  toggleTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
