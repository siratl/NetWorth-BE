import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBars } from '@fortawesome/free-solid-svg-icons';

function Income(props) {
  const { push } = props.history;
  return (
    <div className='mainContainer'>
      <div className='header'>
        <FontAwesomeIcon id='home' onClick={() => push('/')} icon={faHome} />
        <h2>Income</h2>
        <FontAwesomeIcon id='menu' onClick={() => push('/')} icon={faBars} />
      </div>
    </div>
  );
}

export default Income;
