import React, { useState } from 'react';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faBars,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';

function Bills(props) {
  const { push } = props.history;
  const { sideBarToggle, isSideBarOpen } = props;

  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

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

      <div className='totals'>
        <span>
          Total Bills <p>$0</p>
        </span>
        <span>
          Unpaid Bills<p>$0</p>
        </span>
      </div>

      <div className='add'>
        <ButtonDropdown block isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle block id='add-btn' caret color='info' size='lg'>
            <FontAwesomeIcon icon={faPlusCircle} /> Add Bill
          </DropdownToggle>
          <DropdownMenu id='add-btn-menu'>
            <DropdownItem>Add Bill</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Delete Bill</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </div>

      <div className='list'>
        <Table striped>
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

export default Bills;
