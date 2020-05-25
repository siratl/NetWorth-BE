import React, { useState } from 'react';
import { Button } from 'reactstrap';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className='mainContainer'>
      <div className='header'>Header</div>
      <div className='board'>
        <h2>Net Worth</h2>
      </div>
      <div className='categories'>
        <span className='income'>
          <h3>Income</h3>
          <a href='#'>0</a>
        </span>
        <span className='cash'>
          <h3>Cash</h3>
          <a href='#'>0</a>
        </span>
        <span className='budget'>
          <h3>Budget</h3>
          <a href='#'>0</a>
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
