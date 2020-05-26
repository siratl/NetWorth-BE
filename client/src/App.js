import React, { useState } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard.js';
import Bills from './Components/Bills/Bills.js';
import Income from './Components/Income/Income.js';
import Budget from './Components/Budget/Budget.js';
import Bank from './Components/Bank/Bank.js';
import Investments from './Components/Investments/Investments.js';

function App() {
  const [count, setCount] = useState(0);
  const [warn, setWarn] = useState(false);

  return (
    <div className='App'>
      <Route exact path='/' component={Dashboard} />
      <Route path='/bills' component={Bills} />
      <Route path='/budget' component={Budget} />
      <Route path='/bank' component={Bank} />
      <Route path='/income' component={Income} />
      <Route path='/investments' component={Investments} />
    </div>
  );
}

export default App;
