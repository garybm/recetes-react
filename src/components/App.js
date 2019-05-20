import React from 'react';
import  { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation'
import Dashboard from './Dashboard'
import RecipeDetails from './RecipeDetails'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
          <Navigation />
          <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/recipe/:id' component={RecipeDetails}/>
          </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
