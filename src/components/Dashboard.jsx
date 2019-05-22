import React from 'react';
import Search from './Search'
import RecipeList from './RecipeList'
import { connect } from 'react-redux'


class Dashboard extends React.Component {
  render() {

    // console.log(this.props);
    const { recipes } = this.props;

    return (
      <div className="dashboard container">
        <style jsx>{`
            .col {
              border: 1px red solid;
            }

        `}</style>
        <div className="row">
          <div className="col s12 m6">
            <RecipeList recipes={recipes} />
            </div>
          <div className="col s12 m5 offset-m1">
            <Search />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipe.recipes
  }
}

export default connect(mapStateToProps)(Dashboard)
