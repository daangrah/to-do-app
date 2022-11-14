
import './App.css';
import TodoHead from "./components/TodoHead";
import TodoMain from "./components/TodoMain";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoHead/>
      </header>
      <TodoMain />
    </div>
  );
}

export default App;
