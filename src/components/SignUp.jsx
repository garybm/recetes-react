import React, { Component } from 'react'
import background from '../assets/images/background.jpg';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
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
        background-image: url{background};
        background-size: 100%;
        background-position: bottom;
      }

      body, html {
      height: 100%;
      margin: 0;
      }

      form {
        background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
        color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width:50%;
        margin: auto;
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
      input[type=text]:not(.browser-default):focus:not([readonly]) + label,
      textarea.materialize-textarea:focus:not([readonly]) + label,
      input[type=email]:not(.browser-default):focus:not([readonly]) + label,
      input[type=password]:not(.browser-default):focus:not([readonly]) + label{
        color: #95a00d !important;
      }
      `}</style>
          <form className="formContainer" onSubmit={this.handleSubmit}>
            <h5 className=" white-text text-darken-3">SIGN UP</h5>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id='email' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input type="password" id='password' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id='firstName' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id='lastName' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <button>SIGN UP</button>
            </div>
          </form>
      </div>
    )
  }
}

export default SignUp;
