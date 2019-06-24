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
    // console.log(this.state);
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
        background-size: 100vh;
        background-position: bottom;
      }

      body, html {
      height: 100%;
      margin: 0;
      }

      form {
        color: gray;
        position: absolute;
        background: white;
        top: 60%;
        left: 50%;
        transform: translate(-90%, -50%);
        width:40%;
        height:70%;
        padding: 20px;
        border-radius: 5px;
      }

      .input-field label {
        color: gray;
      }
      .input-field input {
        color: gray;
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
        border-color: white;
        box-shadow: none;
      }
      input[type=text]:not(.browser-default):focus:not([readonly]) + label,
      textarea.materialize-textarea:focus:not([readonly]) + label,
      input[type=email]:not(.browser-default):focus:not([readonly]) + label,
      input[type=password]:not(.browser-default):focus:not([readonly]) + label{
        color: white !important;
      }

      `}</style>
          <form className="formContainer" onSubmit={this.handleSubmit}>
            <h5 className=" gray-text text-darken-3">SIGN UP</h5>
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
