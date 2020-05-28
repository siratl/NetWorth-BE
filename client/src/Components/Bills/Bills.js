import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Button, Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faBars,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';

function Bills(props) {
  const { push } = props.history;
  const { sideBarToggle, isSideBarOpen } = props;

  const [date, setDate] = useState(new Date());
  const onChange = () => setDate({ date });

  return (
    <div className='mainContainer'>
      <div className='header'>
        <FontAwesomeIcon id='home' onClick={() => push('/')} icon={faHome} />
        <h2>Bills</h2>
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
        <Calendar onChange={onChange} value={date} />
      </div>

      {/* ----------------------- Add Btn ------------------ */}
      <div className='add'>
        <Button id='add-btn' size='lg' block color='info'>
          <FontAwesomeIcon icon={faPlusCircle} /> Add Bill
        </Button>
      </div>

      {/* ------------------------ Table ----------------------------- */}
      <div className='list'>
        <Table striped size='sm'>
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
      <br></br>
      <br></br>
    </div>
  );
}

export default Bills;
