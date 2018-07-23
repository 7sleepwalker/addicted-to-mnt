import React, { Component } from 'react';
import { Link } from 'react-router-dom'

function ReturnHome(props) {
  return (
    <Link to='/'><div className='addictiv__close'> <div className="addictiv__close-text">Close</div> </div></Link>
  );
}

export default ReturnHome;
