import React from 'react';
import RecipeSummary from './RecipeSummary'
import { Link } from 'react-router-dom'

const RecipeList = ({recipes}) => {
  return (
    <div >
      <style jsx>{`
          .container {
            border: solid 1px red;
          }
            `}</style>
      { recipes && recipes.map(recipe => {
        return (
          <Link className="recipe" to={ '/recipe/' + recipe.id} >
            <RecipeSummary recipe={recipe} key={recipe.id} />
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
