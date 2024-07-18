import api from './api';
import { authHeader } from '../helpers/auth-header';

const getAllTodos = () => {
  return api.get('/todos', { headers: authHeader() });
};


const createTodo = (todo) => {
  return api.post('/todos/admin/todo', todo, { headers: authHeader() });
};


const deleteTodo = (todoId) => {
  return api.delete(`/todos/${todoId}`, { headers: authHeader() });
};

const updateTodo = (todoData) => {
  console.log(todoData)
  return api.put('/todos/admin/update', todoData, {
    headers: {
      ...authHeader(),
      'Content-Type': 'application/json'
    }
  });
};

export const todoService = { getAllTodos, createTodo, deleteTodo, updateTodo };
