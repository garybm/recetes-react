import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import facebook from '../assets/images/facebook.png';
import twitter from '../assets/images/twitter.png';
import instagram from '../assets/images/instagram.png';
import { Link } from 'react-router-dom';

class SignedOutLinks extends React.Component {

  render() {
  return (
    <div>
      <style jsx>{`

      .nav-links {
        display: flex;
        height: 100%;
        justify-content: space-around;
        margin-left: auto;
        align-items: center;
      }
      .nav-links li a {
        color: #3D5E68;
        text-decoration: none;
      }

      .nav-links {
        position: fixed;
        height: 90vh;
        width: 100%;
        flex-direction: column;
      }

      a{
        font-weight: 500;
        font-size: 24px;
      }

      .nav-links li {
        transition: width 2s, height 2s, transform 1s;
      }
      li:hover{
      transform: scale(1.5);
      }

      .social img {
        width: 34px;
        height: 34px;
        margin: 20px;
      }

    `}</style>
      <ul className="nav-links">
        <li><a href="#">HOME</a></li>
        <li><a href="#">LOG IN</a></li>
        <div className="social">
          <a href="#"><img src={instagram} alt="website-logo"></img></a>
          <a href="#"><img src={facebook} alt="website-logo"></img></a>
          <a href="#"><img src={twitter} alt="website-logo"></img></a>
        </div>
      </ul>
    </div>
  )
  }
}

export default SignedOutLinks;
