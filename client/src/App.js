import React, { useState } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard.js';
import Bills from './Components/Bills/Bills.js';
import Income from './Components/Income/Income.js';
import Investments from './Components/Investments/Investments.js';

function App() {
  const [count, setCount] = useState(0);
  const [warn, setWarn] = useState(false);

  return (
    <div className='App'>
      <Route path='/' component={Dashboard} />
      <Route exact path='/bills' component={Bills} />
      <Route exact path='/income' component={Income} />
      <Route exact path='/investments' component={Investments} />
    </div>
  );
}

export default App;
