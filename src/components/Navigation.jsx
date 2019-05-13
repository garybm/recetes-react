import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import SignedInLinks from './SignedInLinks';

class Navigation extends React.Component {

  state = {
    on: false,
  }

  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }

  render() {
  return (
    <div>
      <style jsx>{`
      .menuLogo {
        height: 10vh;
        width: 100%;
        display: flex;

      }
      .hamburger {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: flex-end;
        cursor: pointer;
        transform: translate( -10%);

      }

      .imageContainer {
        height: 100%;
        width: 50%;
      }


      img {
        width: 150px;
        height: 150px;
        transform: translate( 10%, -25%);

      }
  
      .line {
        width: 30px;
        height: 3px;
        background: #3D5E68;
        margin: 5px;
      }
      nav {
        position: relative;
      }
      .nav-links {
        position: fixed;
        background-color: #FDCCC0;
        height: 90vh;
        width: 100%;
        flex-direction: column;
      }

    `}</style>
        <div className="menuLogo">
          <div className="imageContainer">
            <Link to='/'><a href="#"><img src={logo} alt="website-logo"></img></a></Link>
          </div>
          <div className="hamburger" onClick={this.toggle}>
            <div className="line"> </div>
            <div className="line"> </div>
            <div className="line"> </div>
          </div>
        </div>
      {this.state.on &&
        <SignedInLinks />
      }
    </div>
  )
}
}

export default Navigation;
