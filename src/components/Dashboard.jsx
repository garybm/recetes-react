import React from 'react';
import Search from './Search'
import RecipeList from './RecipeList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'


class Dashboard extends React.Component {
  render() {
    const { recipes } = this.props;
    return (
      <div className="container">
      <style jsx>{`
        container {

          border: 1px solid red;
        }
      h2 {
        font-size: 60px;
        align: center;
      }

      `}</style>
        <h2>My Recipes</h2>
          <RecipeList recipes={recipes} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.firestore.ordered.recipes
  }
}

export default compose(connect(mapStateToProps), firestoreConnect([{collection: 'recipes'}])
)(Dashboard)
