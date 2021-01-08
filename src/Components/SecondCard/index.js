import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';


export default function SecondCard() {


  return (
    <div className='second-card'>

      <img
        src={process.env.PUBLIC_URL + '/images/blob1.png'}
        alt="blob"
        className="blob2"
      />



      <h3>Data mapping now accesible!</h3>
      <p className='small-text description center'>Now its easier than ever to scale and map data acording to your business's needs! You don't need to pay thousands of dollars for features that you'll probably never use!</p>

      <div className='grid3 overBox center'>
        <div>
          <div className='content-card center'>
            <i class="fas fa-binoculars circleIcon"></i>
            <h4>Control</h4>
          </div>
        </div>
        <div>
          <div className='content-card center'>
            <i class="fas fa-seedling  circleIcon"></i>
            <h4>Scalability</h4>
          </div>
        </div>
        <div>
          <div className='content-card center'>
            <i class="fas fa-bolt circleIcon"></i>
            <h4>Interaction</h4>
          </div>
        </div>
      </div>
      <Link to='/start' className='button center'>Check it out!
      <i class="fas fa-arrow-right buttonIcon"></i>
      </Link>

      <img
        src={process.env.PUBLIC_URL + '/images/dataScience2.png'}
        alt="data science"
        className="dataScience"
      />
    </div>
  );
}
