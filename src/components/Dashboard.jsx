import React from 'react';
import Search from './Search'
import RecipeList from './RecipeList'


class Dashboard extends React.Component {
  render() {

    return (
      <div className="dashboard container">
        <style jsx>{`
            .col {
              border: 1px red solid;
            }

        `}</style>
        <div className="row">
          <div className="col s12 m6">
            <RecipeList />
            </div>
          <div className="col s12 m5 offset-m1">
            <Search />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
