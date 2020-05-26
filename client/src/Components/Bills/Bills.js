import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function Bills(props) {
  const { push } = props.history;

  return (
    <div className='mainContainer'>
      <div className='header'>
        <FontAwesomeIcon id='home' onClick={() => push('/')} icon={faHome} />

        <h2>Bills</h2>
      </div>
    </div>
  );
}

export default Bills;
