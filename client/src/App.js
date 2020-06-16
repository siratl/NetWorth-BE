import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import "./App.css";
import "react-calendar/dist/Calendar.css";
import { Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard.js";
import Bills from "./Components/Bills/Bills.js";
import Budget from "./Components/Budget/Budget.js";
import Bank from "./Components/Bank/Bank.js";
import Investments from "./Components/Investments/Investments.js";
import SideBar from "./Components/Sidebar/SideBar.js";
import Backdrop from "./Components/Backdrop/Backdrop.js";
import Auth from "./Components/Auth/Auth.js";

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

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  // useEffect(() => {
  //   console.log("app render", userData);
  //   axios
  //     .get(`http://127.0.0.1:5000/api/bills/user/${userData.id}`)
  //     .then((res) => {
  //       console.log("response", res);
  //     });
  // }, []);

  const retrieveUser = (data) => {
    setUserData(data);
  };

  console.log();
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
        path='/login'
        render={(props) => <Auth {...props} retrieveUser={retrieveUser} />}
      />
    </div>
  );
}

export default App;
