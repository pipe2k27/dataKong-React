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
      <a className='wallLink' href='https://requests.datawallet.com?cid=12e7b5ac-aec2-4d31-b16c-af6862594aa9'>Data Subject Request (Claim your data)</a>
      <a className='wallLink' href='https://requests.datawallet.com/sale?cid=12e7b5ac-aec2-4d31-b16c-af6862594aa9'>Do not sell my data</a>
    </div>
  );
}
