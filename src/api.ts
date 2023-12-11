// api.ts

import axios from 'axios';
import { Todo } from './Todo';

export const getTodos = async () => {
    const response = await axios.get<Todo[]>('/api/todo');
    return response.data;
};

export const postTodo = async (todo: Omit<Todo, 'id'>) => {
    const response = await axios.post<Todo>('/api/todo', todo);
    return response.data;
};

export const updateTodoStatus = async (todo: Todo) => {
    const response = await axios.put<Todo>('/api/todo/' + todo.id, todo);
    return response.data;
};