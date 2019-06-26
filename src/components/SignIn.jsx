import React, { Component } from 'react'
import background from '../assets/images/background.jpg';
import { connect } from 'react-redux'
import { signIn } from '../store/actions/authActions'

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
    this.props.signIn(this.state)
  }
  render() {
    const { authError } = this.props;
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
          img {
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-size: cover;
            position: relative;
          }
          .formContainer{
            color: gray;
            position: absolute;
            background: white;
            top: 60%;
            left: 50%;
            transform: translate(-90%, -50%);
            width:40%;
            height:50%;
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
            border-color: #95a00d;
            box-shadow: none;
          }
        `}</style>
        <form className="formContainer" onSubmit={this.handleSubmit}>
          <h5 className="gray-text text-darken-3">SIGN IN</h5>
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
            <div className="red-text center error">
              { authError ? <p>{authError}</p> : null }
            </div>
          </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
