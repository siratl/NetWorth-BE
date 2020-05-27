import React from 'react';
import './Backdrop.css';

function Backdrop(props) {
  const { sideBarToggleClose } = props;

  return <div onClick={sideBarToggleClose} className='backdrop'></div>;
}

export default Backdrop;
