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
    var sectionStyle = {
      width: "100%",
      height: "100vh",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundImage: `url(${background})`
    };
    return (
      <div style={ sectionStyle } className="mainContainer">
        <style jsx>{`
        .mainContainer {
          width: 100%;
          index-z: 1;
        }
        body, html {
        height: 100%;
        margin: 0;
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
          padding: 50px;
        }
        .input-field label {
          color: white;
        }
        .input-field input {
          color: white;
        }
        button {
          background-color: #95a00d;
          color: white;
          border: none;
          border-radius: 25px;
          width: 254px;
          height: 50px;
          cursor: pointer;
        }
        input[type=text]:not(.browser-default):focus:not([readonly]),
        input[type=email]:not(.browser-default):focus:not([readonly]),
        input[type=password]:not(.browser-default):focus:not([readonly]),
        textarea.materialize-textarea:focus:not([readonly]){
          border-color: #95a00d;
          box-shadow: none;
        }
        `}</style>
        <form className="formContainer" onSubmit={this.handleSubmit}>
          <h5 className="white-text text-white">SIGN IN</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button>LOGIN</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
