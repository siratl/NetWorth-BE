import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faBars,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';

function Bank(props) {
  const { push } = props.history;
  const { sideBarToggle, isSideBarOpen } = props;

  return (
    <div className='mainContainer'>
      <div className='header'>
        <FontAwesomeIcon id='home' onClick={() => push('/')} icon={faHome} />
        <h2>Bank</h2>
        <FontAwesomeIcon
          id='menu'
          onClick={sideBarToggle}
          icon={isSideBarOpen ? null : faBars}
        />
      </div>

      {/* ----------------------- Totals ------------------ */}
      <div className='totals'>
        <span>
          Total Cash <p>$0</p>
        </span>
        <span>
          Unpaid Bills<p>$0</p>
        </span>
      </div>

      {/* ----------------------- Add Btn ------------------ */}
      <div className='add'>
        <Button id='add-btn' size='lg' block color='info'>
          <FontAwesomeIcon icon={faPlusCircle} /> Add Cash
        </Button>
      </div>
    </div>
  );
}

export default Bank;
