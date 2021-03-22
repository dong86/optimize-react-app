import { useState, useCallback } from 'react';
import AddTodoListButton from './AddTodoListButton';
import { Clock } from './Clock';
import { Summary } from './Summary';
import './App.css';

function App() {
  const [currTick, setCurrTick] = useState(1);
  const onClickAddButton = useCallback(() => console.log('Adding new todo...'), []);
  const [todos, setTodos] = useState(['Learn React', 'Optimize React']);

  const updateTick = () => {
    setCurrTick(currTick + 1);
  }

  function deleteTodo() {
    const copiedTodos = [...todos ];
    copiedTodos.pop();
    setTodos(copiedTodos);
  }

  return (
    <div className="App">
      <h2>Optimize Component</h2>
      <p>Tick: {currTick}</p>
      <Clock onTicking={updateTick}/>
      <AddTodoListButton onClick={onClickAddButton}/>
      <Summary todos={todos}/>
      <button onClick={deleteTodo}>Delete Todo</button>
    </div>
  );
}

export default App;
