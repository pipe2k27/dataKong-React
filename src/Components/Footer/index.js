import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';


export default function Footer() {


  return (
    <div className='footer'>
      <img
        src={process.env.PUBLIC_URL + '/images/aidafyLogo.png'}
        className="footerLogo"
        alt='Aidafy'
      ></img>
      <p>info@aidafy.com</p>
      <p>®Aidafy</p>
    </div>
  );
}
