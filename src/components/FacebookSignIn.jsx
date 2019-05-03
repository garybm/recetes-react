import React from 'react';
import FacebookLogin from 'react-facebook-login'

class FacebookSignIn extends React.Component {

    state = {
      isLoggedIn: false ,
      userId: '',
      name: '',
      email: '',
      picture: ''
    };

    responseFacebook = response => {
      // console.log(response);
      this.setState({
        isLoggedIn: true,
        userID: response.userID,
        name: response.name,
        email: response.email,
        picture: response.picture.data.url
      });
    };
    componentClicked = () => {
      console.log("clicked");
    }

  render () {

    let fbContent;

    if(this.state.isLoggedIn) {
      fbContent = (
        <div>
          <img src={this.state.picture} alt={this.state.name} />
          <h2>{this.state.name}</h2>
        </div>
      );
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


export default FacebookSignIn;
