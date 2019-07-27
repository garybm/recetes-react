import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import chifrijo from '../assets/images/chifrijo.jpg';


const RecipeDetails = (props) => {
  const { recipe } = props;
  if (recipe) {
    return (
      <div className="container section project-details">
      <style jsx>{`
        .card {
          width: 75%;

          // border: 1px red solid;
        }
        .section {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        `}</style>
        <h1 className="card-title"> {recipe.title} </h1>
        <div className="card z-depth-0">
        <div class="card-image">
          <img src={ chifrijo }/>
        </div>
        <div className="card-action  lighten-4 grey-text">
          <h3>Ingredients</h3>
          <p> {}</p>
        </div>
          <div className="card-action  lighten-4 grey-text">
          <h3>Description</h3>
           <p> { recipe.description }</p>
          </div>
          <div className="card-action  lighten-4 grey-text">
            <h3>Directions</h3>
            <p> { recipe.directions }</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by { recipe.authorFirstName } { recipe.authorLastName }</div>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center" >
        <p>Recipe is loading...</p>
      </div>
    )
  }
}

  const mapStateToProps = (state, ownProps) => {
    // console.log(state);
    const id = ownProps.match.params.id;
    const recipes = state.firestore.data.recipes;
    const recipe = recipes ? recipes[id] : null
    return {
      recipe : recipe
    }
  }

  export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'recipes'}
    ])
  )(RecipeDetails);
