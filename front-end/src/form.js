import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/list');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (inputValue.trim() === '') {
      return; // Skip empty todo
    }

    try {
      const newTodo = {
        todo: inputValue,
      };

      await axios.post('http://localhost:3000/list', newTodo);
      fetchTodos();
      setInputValue('');
    } catch (error) {
      console.error('Error creating todo:', error);
    }
  };

  const handleTodoDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/list/${id}`);
      fetchTodos();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>To-Do:</h2>
      <form onSubmit={handleFormSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Enter something to do..."
          value={inputValue}
          onChange={handleInputChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Add
        </button>
      </form>
      <ul style={styles.todoList}>
        {todos.map((todo) => (
          <li key={todo.todo_id} style={styles.todoItem}>
            <div style={styles.dot}></div>
            <div style={styles.todoText}>{todo.todo}</div>
            <button
              onClick={() => handleTodoDelete(todo.todo_id)}
              style={styles.deleteButton}
            >
          Done!
      </button>
    </li>
  ))}
</ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '30px',
    marginBottom: '30px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    marginBottom: '20px',
  },

  input: {
    flex: '1',
    padding: '8px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginRight: '8px',
  },

  button: {
    padding: '8px 16px',
    fontSize: '16px',
    background: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  todoList: {
    listStyleType: "none",
    padding: 0,
  },

  todoItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  dot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: "black",
    marginRight: "10px",
  },
  todoText: {
    flex: 1,
  },
  deleteButton: {
    marginLeft: "10px",
    padding: "5px 10px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default TodoApp;
