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

      <h1>Site under Construction!</h1>
      <p className='small-text description center'>Our platform is currently being built and will soon be ready to use. Leave us your email bellow and we'll contact you with further information!</p>
      {notClicked && <div>
        <form>
          <label>Email:</label>
          <input type='text' className='mail' placeholder='Your Email'></input>
        </form>
        <div className='button center' onClick={() => { setClicked(false) }}>Contact me!
      <i class="fas fa-envelope buttonIcon"></i>
        </div></div>}

      {!notClicked &&
        <div>
          <p style={{ color: 'red' }}>
            Thank you! You will be contacted shortly!
        </p>
          <Link className='button center' to='/'>Home!
              <i class="fas fa-arrow-left buttonIcon"></i>
          </Link>
        </div>
      }


      <img
        src={process.env.PUBLIC_URL + '/images/dataScience.png'}
        alt="data science"
        className="dataScience4"
      />
    </div >
  );
}
