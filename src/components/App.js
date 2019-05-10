import React from 'react';
import  { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation'
import Dashboard from './Dashboard'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navigation />
          <Dashboard />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
