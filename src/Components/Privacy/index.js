import React, { useState, useEffect } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';


export default function Contact() {
  const [notClicked, setClicked] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className='first-card'>
      <img
        src={process.env.PUBLIC_URL + '/images/dataScience3.png'}
        alt="data science"
        className="dataScience3"
      />

      <h1>Privacy Policy!</h1>
      <p className='small-text description center'>Our platform is currently being built and will soon be ready to use. Leave us your email bellow and we'll contact you with further information!</p>
    </div >
  );
}
