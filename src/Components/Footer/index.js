import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';


export default function Footer() {


  return (
    <div className='footer'>
      <img
        src={process.env.PUBLIC_URL + '/images/dataKongLogo.png'}
        className="footerLogo"
        alt='data kong'
      ></img>
      <p>info@datakong.com</p>
      <p>®DataKong</p>
    </div>
  );
}
