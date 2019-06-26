import React from 'react'
import { NavLink } from 'react-router-dom'
import CreateRecipe from './CreateRecipe'
import { connect } from 'react-redux'
import { signOut } from '../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
    <div>
      <style jsx>{`
        ul .btn {
          background-color: #95a00d;
        }
      `}</style>
      <ul className="right">
        <li><NavLink to='/add'>Add Recipe</NavLink></li>
        <li><a onClick={ props.signOut}>Log Out</a></li>
        <li><NavLink to='/' className="btn btn-floating lighten-1">GB</NavLink></li>
      </ul>
    </div>
  )
}
const mapDispathToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispathToProps)(SignedInLinks)

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import logo from '../assets/images/logo.png';
// import facebook from '../assets/images/facebook.png';
// import twitter from '../assets/images/twitter.png';
// import instagram from '../assets/images/instagram.png';
// import { Link } from 'react-router-dom';
//
// class SignedInLinks extends React.Component {
//
//   render() {
//   return (
//     <div>
//       <style jsx>{`
//
//       .nav-links {
//         display: flex;
//         height: 100%;
//         justify-content: space-around;
//         margin-left: auto;
//         align-items: center;
//         z-index: 1;
//         border: 1px solid green;
//       }
//
//       .nav-links li a {
//         color: #3D5E68;
//         text-decoration: none;
//       }
//
//       a{
//         font-weight: 500;
//         font-size: 24px;
//       }
//
//       .nav-links li {
//         transition: width 2s, height 2s, transform 1s;
//       }
//
//       li:hover{
//         transform: scale(1.5);
//       }
//
//       .social img {
//         width: 34px;
//         height: 34px;
//         margin: 20px;
//       }
//
//     `}</style>
//       <ul className="nav-links">
//         <li><a href="#">HOME</a></li>
//         <li><a href="#">ADD</a></li>
//         <li><a href="#">LOG OUT</a></li>
//         <li><a href="#">GB</a></li>
//         <div className="social">
//           <a href="#"><img src={instagram} alt="website-logo"></img></a>
//           <a href="#"><img src={facebook} alt="website-logo"></img></a>
//           <a href="#"><img src={twitter} alt="website-logo"></img></a>
//         </div>
//       </ul>
//     </div>
//   )
//   }
// }
//
// export default SignedInLinks;
