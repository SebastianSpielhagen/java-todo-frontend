// App.tsx

import { TodoList } from './TodoList';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="app-header">
                <h1>Todo Liste</h1>
            </div>
            <TodoList />
        </div>
    );
}

export default App;