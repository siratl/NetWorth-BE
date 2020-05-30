import React from 'react';
import Calendar from 'react-calendar';
import { Button } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faBars,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';

function Income(props) {
  const { push } = props.history;
  const { sideBarToggle, isSideBarOpen, onChange, date } = props;

  return (
    <div className='mainContainer'>
      <div className='header'>
        <FontAwesomeIcon id='home' onClick={() => push('/')} icon={faHome} />
        <h2>Income</h2>
        <FontAwesomeIcon
          id='menu'
          onClick={sideBarToggle}
          icon={isSideBarOpen ? null : faBars}
        />
      </div>

      {/* ----------------------- Totals ------------------ */}
      <div className='totals'>
        <span>
          Total Bills <p>$0</p>
        </span>
        <span>
          Unpaid Bills<p>$0</p>
        </span>
      </div>

      {/* ----------------------- Calendar ------------------ */}
      <div className='calendar'>
        <Calendar calendarType='US' onChange={onChange} value={date} />
      </div>

      {/* ----------------------- Add Btn ------------------ */}
      <div className='add'>
        <Button id='add-btn' size='lg' block color='info'>
          <FontAwesomeIcon icon={faPlusCircle} /> Add Income
        </Button>
      </div>
    </div>
  );
}

export default Income;
