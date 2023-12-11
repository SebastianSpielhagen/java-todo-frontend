// TodoList.tsx

import { useEffect, useState } from 'react';
import { Todo } from './Todo';
import { getTodos, postTodo, updateTodoStatus, deleteTodo, deleteAllTodos } from './api';

export const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [description, setDescription] = useState('');

    useEffect(() => {
        const fetchTodos = async () => {
            const todos = await getTodos();
            setTodos(todos);
        };

        fetchTodos();
    }, []);

    const addTodo = async () => {
        const newTodo = {
            description: description,
            status: 'OPEN' as const,
        };

        const savedTodo = await postTodo(newTodo);
        setTodos([...todos, savedTodo]);
    };

    const changeStatus = async (status: Todo['status'], todo: Todo) => {
        const updatedTodo = {...todo, status};
        const savedTodo = await updateTodoStatus(updatedTodo);
        setTodos(todos.map(t => t.id === todo.id ? savedTodo : t));
    };

    const deleteSingleTodo = async (id: string) => {
        await deleteTodo(id);
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const deleteAll = async () => {
        await deleteAllTodos(todos);
        setTodos([]);
    };

    return (
        <div>
            <h1>Todo-Liste</h1>
            <h3>Aufgabe</h3>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            <button onClick={addTodo}>Erstellen</button>
            <button onClick={deleteAll}>Alle löschen</button>

            {todos.map(todo => (
                <div key={todo.id}>
                    <span>{todo.description}</span>
                    <span> - Status: {todo.status}</span>
                    <button onClick={() => deleteSingleTodo(todo.id)}>Löschen</button>
                    {todo.status === 'OPEN' && (
                        <button onClick={() => changeStatus('IN_PROGRESS', todo)}>Erledigt</button>
                    )}
                    {todo.status === 'IN_PROGRESS' && (
                        <button onClick={() => changeStatus('DONE', todo)}>Erledigt</button>
                    )}
                </div>
            ))}
        </div>
    );
};