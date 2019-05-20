import React, { Component } from 'react'
import background from '../assets/images/background.jpg';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="mainContainer">
        <style jsx>{`
        .mainContainer {
          width: 100%;
          index-z: 1;
        }
        img {
          width: 100%;
          height: 100%;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
        }
        .formContainer{
          background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
          color: white;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width:50%;
          margin: auto;
          // margin-top: 10%;
          padding: 15px;
        }
        .input-field label {
          color: white;
        }
        .input-field input {
          color: white;
        }
        `}</style>
        <img className="background" src={background}
          alt='PGE Company Logo'/>
        <form className="formContainer" onSubmit={this.handleSubmit}>
          <h5 className="white-text text-white">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
