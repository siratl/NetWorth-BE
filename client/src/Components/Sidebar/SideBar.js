import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import './SideBar.css';

function SideBar(props) {
  const { sideBarToggleClose, isSideBarOpen } = props;

  let sideBarClasses = 'sideBar';
  if (isSideBarOpen) {
    sideBarClasses = 'sideBar open';
  }

  return (
    <div className={sideBarClasses}>
      <FontAwesomeIcon
        onClick={sideBarToggleClose}
        id='close'
        icon={faAngleLeft}
      />
      <nav className='sideBarNav'>
        <NavLink onClick={sideBarToggleClose} id='link' to='bank'>
          <span>Bank</span>
        </NavLink>
        <NavLink onClick={sideBarToggleClose} id='link' to='bills'>
          <span>Bills</span>
        </NavLink>
        <NavLink onClick={sideBarToggleClose} id='link' to='budget'>
          <span>Budget</span>
        </NavLink>
        <NavLink onClick={sideBarToggleClose} id='link' to='investments'>
          <span>Investments</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default SideBar;
