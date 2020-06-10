import React, { useState } from 'react';
import moment from 'moment';
import './App.css';
import 'react-calendar/dist/Calendar.css';
import { Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard.js';
import Bills from './Components/Bills/Bills.js';
import Budget from './Components/Budget/Budget.js';
import Bank from './Components/Bank/Bank.js';
import Investments from './Components/Investments/Investments.js';
import SideBar from './Components/Sidebar/SideBar.js';
import Backdrop from './Components/Backdrop/Backdrop.js';
import Auth from './Components/Auth/Auth.js';

function App(props) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const sideBarToggle = (ev) => {
    setIsSideBarOpen(true);
  };
  const sideBarToggleClose = (ev) => {
    setIsSideBarOpen(false);
  };

  let backdrop;

  if (isSideBarOpen) {
    backdrop = <Backdrop sideBarToggleClose={sideBarToggleClose} />;
  }

  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div className='App'>
      <SideBar
        isSideBarOpen={isSideBarOpen}
        sideBarToggleClose={sideBarToggleClose}
      />
      {backdrop}
      <Route exact path='/' component={Dashboard} />
      <Route
        path='/bills'
        render={(props) => (
          <Bills
            {...props}
            isSideBarOpen={isSideBarOpen}
            sideBarToggle={sideBarToggle}
            onChange={onChange}
            date={date}
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
        path='/investments'
        render={(props) => (
          <Investments
            {...props}
            isSideBarOpen={isSideBarOpen}
            sideBarToggle={sideBarToggle}
          />
        )}
      />

      <Route
        sideBarToggle={sideBarToggle}
        path='/login'
        render={(props) => (
          <Auth
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
