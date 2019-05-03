import React from 'react';
import FacebookLogin from 'react-facebook-login'

class SignIn extends React.Component {

    state = {
      isLoggedIn: false ,
      userId: '',
      name: '',
      email: '',
      picture: ''
    };

    responseFacebook = response => {
      console.log(response);
    }
    componentClicked = () => {
      console.log("clicked");
    }

  render () {

    let fbContent;
    if(this.state.isLoggedIn) {
      fbContent = null;
    } else {
      fbContent = (<FacebookLogin
    appId="350027095541881"
    autoLoad={true}
    fields="name,email,picture"
    onClick={this.componentClicked}
    callback={this.responseFacebook} />
      );
    }
    return (
      <div>{fbContent}</div>
    )
  }
}


export default SignIn;
