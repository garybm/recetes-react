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

          .hamburger {
            display: flex;
            flex-direction: column;

            height: 10vh;
            justify-content: center;
            align-items: flex-end;
            cursor: pointer;
            transform: translate(-2%, -10%);
          }

          img {
            width: 150px;
            height: 150px;
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

          @media screen and (max-width: 768px){

            .line {
              width: 30px;
              height: 3px;
              background: #3D5E68;
              margin: 5px;
            }

            nav {
              position: relative;
            }

            .hamburger {
              position: absolute;
              cursor: pointer;
              right: 5%;
              top: 60%;
              transform: translate(-5%, -20%);
              z-index: 2;
            }

            .nav-links {
              position: fixed;
              height: 100vh;
              width: 100%;
              flex-direction: column;
            }
          }
              `}</style>
      <nav>
        <div className="hamburger" onClick={this.toggle}>
          <div className="line"> </div>
          <div className="line"> </div>
          <div className="line"> </div>
        </div>
        {this.state.on && (
          <ul className="nav-links">
            <img src={logo} alt="website-logo"></img>
            <li><a href="#">test</a></li>
            <li><a href="#">test</a></li>
            <li><a href="#">test</a></li>
          </ul>
        )}
      </nav>
    </div>
  )
}
}

export default Navigation;
