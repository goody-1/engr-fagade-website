import React from "react";
import phone_mockup from '../assets/phone_mockup.png';
import issueImage from '../assets/issue.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter--banner">
        <div className="newsletter--title">
          <div className="nws--title-text">
            <h1>
              The <span>UNSTOPPABLE</span> Entrepreneur
            </h1>
            <p>Join 8,000+ subscribers getting inspiration
              and actionable advice to become unstoppable</p>
          </div>
          <img src={phone_mockup} alt="phone mockup" />

        </div>

          <input type="email" placeholder="Email Address"/>
          <button type="submit">Sign Up</button>
      </div>

      <section className="newsletter--issues">
        <h3>Previous Issues of The Unstoppable Entrepreneur</h3>

        <div className="search">
          <FontAwesomeIcon icon={['fas', 'magnifying-glass']} className="fa-icons" size="lg" />
          <input type="search" className="input-field" placeholder="Search"/>
        </div>

        <article>
          <img src={issueImage} alt="" />
          <div>
            <p>JAN. 21, 2023</p>
            <h3>Someday, Today</h3>
            <p>Read More &rarr;</p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Newsletter;