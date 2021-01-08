import React, { useState, useEffect } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';


export default function FirstCard() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <div className='first-card'>

      <img
        src={process.env.PUBLIC_URL + '/images/blob1.png'}
        alt="blob"
        className="blob1"
      />
      <img
        src={process.env.PUBLIC_URL + '/images/dataKongLogoBlue.png'}
        className="logoTitle"
      ></img>


      <h1>Data out of the way!</h1>
      <p className='small-text description center'>Enable your company to manage data in an easy, user friendly way. Grow through a scalable and fully customizable platform, allowing you to generate insights and extract value. Alocate your time to what is really worth!</p>
      <Link to='/start' className='button center'>Start Now!
      <i class="fas fa-arrow-right buttonIcon"></i>
      </Link>
      <img
        src={process.env.PUBLIC_URL + '/images/dataScience.png'}
        alt="data science"
        className="dataScience"
      />
    </div>
  );
}
