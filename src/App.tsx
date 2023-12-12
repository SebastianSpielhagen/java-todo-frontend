// App.tsx

import { TodoList } from './TodoList';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="app-header">
                <nav>
                    <button className="nav-button">Home</button>
                    <button className="nav-button">Aufgabe erstellen</button>
                    <button className="nav-button">Offene Aufgaben</button>
                    <button className="nav-button">Begonnene Aufgaben</button>
                    <button className="nav-button">Erledigte Aufgaben</button>
                </nav>
                <h1 className="app-title">Todo Liste</h1>
            </header>
            <main>
                <TodoList />
            </main>
            <footer className="app-footer">
                <p>© 2022 Mein Unternehmen</p>
            </footer>
        </div>
    );
}

export default App;