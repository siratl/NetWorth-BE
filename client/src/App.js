import React, { useState } from 'react';
import './App.css';
import { Route, NavLink, Link } from 'react-router-dom';
import Dashboard from './Components/Dashboard.js';

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
