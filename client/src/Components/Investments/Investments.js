import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faBars,
  faPlusCircle,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

function Investments(props) {
  const { push } = props.history;
  const { sideBarToggle, isSideBarOpen } = props;

  return (
    <div className='mainContainer'>
      <div className='header'>
        <FontAwesomeIcon id='home' onClick={() => push('/')} icon={faHome} />
        <h2>Investments</h2>
        <FontAwesomeIcon
          id='menu'
          onClick={sideBarToggle}
          icon={isSideBarOpen ? null : faBars}
        />
      </div>

      {/* ----------------------- Totals ------------------ */}
      <div className='totals'>
        <span>
          Investment Value<p>$0</p>
        </span>
        <span>
          Total Invested<p>$0</p>
        </span>
      </div>

      <div className='growth'>
        <p>Total Growth</p>
        <h2>0%</h2>
      </div>

      {/* ----------------------- Add Btn ------------------ */}
      <div className='add'>
        <Button id='add-btn' size='lg' block color='info'>
          <FontAwesomeIcon icon={faPlusCircle} /> Add Investment
        </Button>
      </div>

      {/* ----------------------- Add Btn ------------------ */}
      <div className='add'>
        <Button id='add-btn' size='lg' block color='info'>
          <FontAwesomeIcon icon={faPlus} /> Update Investment Value
        </Button>
      </div>
    </div>
  );
}

export default Investments;
