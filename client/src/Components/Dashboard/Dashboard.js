import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../Dashboard/Dashboard.css';

function Dashboard() {
  return (
    <div className='mainContainer'>
      <div className='header'>Net-Worth App</div>
      <div className='board'>
        <h2>Net Worth</h2>
        <h5>$0</h5>
      </div>
      <div className='categories'>
        <span className='income'>
          <h3>Income</h3>
          <Link to='/income'>0</Link>
        </span>
        <span className='cash'>
          <h3>Cash</h3>
          <Link to='/bank'>0</Link>
        </span>
        <span className='budget'>
          <h3>Budget</h3>
          <Link to='/budget'>0</Link>
        </span>
      </div>
      <div className='billsContainer'>
        <Button className='bills' color='info' size='lg' block>
          Bills
        </Button>
        <Button className='investments' color='info' size='lg' block>
          Investments
        </Button>
        <Button className='bank' color='info' size='lg' block>
          Bank
        </Button>
      </div>
      <div className='footer'>Navigation</div>
    </div>
  );
}

export default Dashboard;
