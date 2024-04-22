export const addTodo = (text) => {
    return {
      type: 'ADD_TODO',
      payload: {
        id: Math.random(),
        text,
        completed: false
      }
    };
  };
  
  export const toggleTodo = (id) => {
    return {
      type: 'TOGGLE_TODO',
      payload: id
    };
  };
  