import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

class SignedInLinks extends React.Component {

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

      .nav-links li {
        font-size: 24px;
        transition: width 2s, height 2s, transform 1s;

      }
      li:hover{
      transform: scale(1.5);
      }

    `}</style>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Add Recipe</a></li>
        <li><a href="#">Log Out</a></li>
        <li><a href="#">GB</a></li>
      </ul>
      <div>
      </div>
    </div>
  )
}
}

export default SignedInLinks;
