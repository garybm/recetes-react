import React from 'react';
import logo from '../assets/images/logo.png';

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
      * {
        margin: 0;
        padding: 0;

      }
      .menuLogo {
        height: 10vh;
        width: 100%;
        display: flex;
        // border: 1px red solid;
      }
      .hamburger {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 50%;
        justify-content: center;
        align-items: flex-end;
        cursor: pointer;
        transform: translate( -10%);
        // border: 1px red solid;
      }

      .imageContainer {
        height: 100%;
        width: 50%;
        cursor: pointer;
        // border: 1px red solid;
      }


      img {
        width: 150px;
        height: 150px;
        // border: 1px red solid;
        transform: translate( 10%, -25%);

      }
      .nav-links {
        display: flex;
        list-style: none;
        width:50%;
        height: 100%;
        justify-content: space-around;
        margin-left: auto;
        align-items: center;
      }

      .nav-links li a {
        color: white;
        text-decoration: none;
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
        background-color: #f2c743;
        height: 90vh;
        width: 100%;
        flex-direction: column;
      }
      .nav-links li {
        font-size: 24px;
      }
    `}</style>
      <nav>
        <div className="menuLogo">
          <div className="imageContainer">
            <a href="#"><img src={logo} alt="website-logo"></img></a>
          </div>
          <div className="hamburger" onClick={this.toggle}>
            <div className="line"> </div>
            <div className="line"> </div>
            <div className="line"> </div>
          </div>
        </div>
        {this.state.on &&
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Log In</a></li>
            <li><a href="#">Log Out</a></li>
            <li><a href="#">Add Recipe</a></li>
          </ul>
        }
      </nav>
    </div>
  )
}
}

export default Navigation;
