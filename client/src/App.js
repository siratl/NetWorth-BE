import React, { useState } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard.js';

function App() {
  const [count, setCount] = useState(0);
  const [warn, setWarn] = useState(false);

  return (
    <div className='App'>
      <Route path='/' component={Dashboard} />
    </div>
  );
}

export default App;
