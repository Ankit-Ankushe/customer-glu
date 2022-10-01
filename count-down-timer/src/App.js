import logo from './logo.svg';
import './App.css';
import { Counter } from '../src/components/Counter/Counter';
import { useState } from 'react';

function App() {
  const [limit,setLimit] = useState(0)
  return (
    <div className="App">
      <h1>Timer</h1>
      <input className='inputTimer' placeholder='Set Timer' value={limit} onChange={(e) => setLimit(e.target.value)} />
      <Counter limit = {limit}/>
    </div>
  );
}

export default App;
