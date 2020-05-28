import React from 'react';
import { Button, Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faBars,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';

function Budget(props) {
  const { sideBarToggle, isSideBarOpen } = props;
  const { push } = props.history;

  return (
    <div className='mainContainer'>
      <div className='header'>
        <FontAwesomeIcon id='home' onClick={() => push('/')} icon={faHome} />
        <h2>Budget</h2>
        <FontAwesomeIcon
          id='menu'
          onClick={sideBarToggle}
          icon={isSideBarOpen ? null : faBars}
        />
      </div>

      {/* ----------------------- Totals ------------------ */}
      <div className='totals'>
        <span>
          Total Budget <p>$0</p>
        </span>
        <span>
          Total Cash<p>$0</p>
        </span>
      </div>

      {/* ----------------------- Add Btn ------------------ */}
      <div className='add'>
        <Button id='add-btn' size='lg' block color='info'>
          <FontAwesomeIcon icon={faPlusCircle} /> Add Budget
        </Button>
      </div>

      {/* ------------------------ Table ----------------------------- */}
      <div className='list'>
        <Table hover size='sm'>
          <thead>
            <tr>
              <th>#</th>
              <th>Bill</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>1</th>
              <td>Internet</td>
              <td>2/May</td>
              <td>$60</td>
            </tr>
            <tr>
              <th scope='row'>2</th>
              <td>Rent</td>
              <td>15/May</td>
              <td>$200</td>
            </tr>
            <tr>
              <th scope='row'>3</th>
              <td>Cell</td>
              <td>18/May</td>
              <td>$40</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Budget;
