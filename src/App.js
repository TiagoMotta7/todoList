import React from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = React.useState([])
  const [todo, setTodo] = React.useState("")

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" onchange={(e) => setTodo(e.target.value)} value={todo}/>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default App;
