import React from 'react';
import RecipeSummary from './RecipeSummary'
import { Link } from 'react-router-dom'

const RecipeList = ({recipes}) => {
  return (
    <div className="summary">
      <style jsx>{`
      .summary {
        // border: 1px red solid;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
      .recipe-list {
        display: flex;
        flex-wrap:wrap;
        // border: 1px red solid;
        width: 40%;
        margin: 3%;
      }
      `}</style>
      { recipes && recipes.map(recipe => {
        return (
          <Link className="recipe-list" to={ '/recipe/' + recipe.id} >
            <RecipeSummary recipe={recipe}/>
          </Link>
        )
      })}
    </div>
  )
}

export default RecipeList;

// <style jsx>{`
// .recipe-list {
//   display: flex;
//   flex-flow: row wrap;
//   border: 1px red solid;
//   display: flex;
//   border: 1px red solid;
// }
// `}</style>
