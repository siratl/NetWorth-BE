import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import './SideBar.css';

function SideBar(props) {
  const { sideBarToggleClose } = props;

  return (
    <div className='sideBar'>
      <FontAwesomeIcon
        onClick={sideBarToggleClose}
        id='close'
        icon={faAngleLeft}
      />
      <nav className='sideBarNav'>
        <NavLink id='link' to='bank'>
          <span>Bank</span>
        </NavLink>
        <NavLink id='link' to='bills'>
          <span>Bills</span>
        </NavLink>
        <NavLink id='link' to='budget'>
          <span>Budget</span>
        </NavLink>
        <NavLink id='link' to='income'>
          <span>Income</span>
        </NavLink>
        <NavLink id='link' to='investments'>
          <span>Investments</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default SideBar;
