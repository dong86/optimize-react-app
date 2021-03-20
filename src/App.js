import { useState } from 'react';
import AddTodoListButton from './AddTodoListButton';
import { Clock } from './Clock';
import './App.css';

function App() {
  const [currTick, setCurrTick] = useState(1);

  const updateTick = () => {
    setCurrTick(currTick + 1);
  }

  return (
    <div className="App">
      <h2>Optimize Component</h2>
      <p>Tick: {currTick}</p>
      <Clock onTicking={updateTick}/>
      <AddTodoListButton onClick={() => console.log('Adding new todo...')}/>
    </div>
  );
}

export default App;
