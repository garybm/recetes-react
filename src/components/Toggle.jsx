import React from 'react';

class Toggle extends React.Component {

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


              .line {
                width: 30px;
                height: 3px;
                background: red;
                margin: 5px;
              }



                `}</style>
        <nav>
          <div className="hamburger open" onClick={this.toggle}>
            <div className="line"> </div>
            <div className="line"> </div>
            <div className="line"> </div>
          </div>
          {this.state.on && (
            <ul className="nav-links">
              <li><a href="#">test</a></li>
              <li><a href="#">test</a></li>
              <li><a href="#">test</a></li>
            </ul>
          )}
        </nav>
      </div>
    );
  }
}

export default Toggle;
