import React from 'react';
import RecipeSummary from './RecipeSummary'
import { Link } from 'react-router-dom'

const RecipeList = ({recipes}) => {
  return (
    <div className="recipe-list">
      <style jsx>{`
          .recipe-list Link{
          // display: flex;
          // flex-flow: row wrap;
          // border: 1px red solid;
          // display: flex;
            border: 1px red solid;
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
