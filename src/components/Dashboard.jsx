import React from 'react';
import Search from './Search'
import RecipeList from './RecipeList'


class Dashboard extends React.Component {
  render() {

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6"></div>
          <div className="col s12 m5 offset-m1">
            <Search />
            <RecipeList />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
