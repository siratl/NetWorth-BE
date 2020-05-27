import React, { useState } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard.js';
import Bills from './Components/Bills/Bills.js';
import Income from './Components/Income/Income.js';
import Budget from './Components/Budget/Budget.js';
import Bank from './Components/Bank/Bank.js';
import Investments from './Components/Investments/Investments.js';
import SideBar from './Components/Sidebar/SideBar.js';
import Backdrop from './Components/Backdrop/Backdrop.js';

function App(props) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const sideBarToggle = (ev) => {
    setIsSideBarOpen(true);
  };
  const sideBarToggleClose = (ev) => {
    setIsSideBarOpen(false);
  };

  let sideBar;
  let backdrop;

  if (isSideBarOpen) {
    sideBar = <SideBar sideBarToggleClose={sideBarToggleClose} />;
    backdrop = <Backdrop sideBarToggleClose={sideBarToggleClose} />;
  }

  return (
    <div className='App'>
      {sideBar}
      {backdrop}

      <Route exact path='/' component={Dashboard} />
      <Route
        path='/bills'
        render={(props) => (
          <Bills
            {...props}
            isSideBarOpen={isSideBarOpen}
            sideBarToggle={sideBarToggle}
          />
        )}
      />
      <Route
        sideBarToggle={sideBarToggle}
        path='/budget'
        render={(props) => (
          <Budget
            {...props}
            isSideBarOpen={isSideBarOpen}
            sideBarToggle={sideBarToggle}
          />
        )}
      />
      <Route
        sideBarToggle={sideBarToggle}
        path='/bank'
        render={(props) => (
          <Bank
            {...props}
            isSideBarOpen={isSideBarOpen}
            sideBarToggle={sideBarToggle}
          />
        )}
      />
      <Route
        sideBarToggle={sideBarToggle}
        path='/income'
        render={(props) => (
          <Income
            {...props}
            isSideBarOpen={isSideBarOpen}
            sideBarToggle={sideBarToggle}
          />
        )}
      />
      <Route
        sideBarToggle={sideBarToggle}
        path='/investments'
        render={(props) => (
          <Investments
            {...props}
            isSideBarOpen={isSideBarOpen}
            sideBarToggle={sideBarToggle}
          />
        )}
      />
    </div>
  );
}

export default App;
