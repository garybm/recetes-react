import React from 'react';
import RecipeSummary from './RecipeSummary'

const RecipeList = ({recipes}) => {
  return (
    <div className="recipe-list">
      <style jsx>{`
          .recipe-list {
            display: flex;
            border: 1px red solid;
          }
            `}</style>
      { recipes && recipes.map(recipe => {
        return (
          <RecipeSummary recipe={recipe} key={recipe.id} />
        )
      })}
    </div>
  )
}

export default RecipeList;
