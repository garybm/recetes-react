import React from 'react';
import  { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation'
import Dashboard from './Dashboard'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
          <Navigation />
          <Switch>
            <Route path='/' component={Dashboard}/> 
          </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
