import React from 'react';
import RecipeSummary from './RecipeSummary'

const RecipeList = ({recipes}) => {
  return (
    <div className="recipe-list">
      <style jsx>{`
          .recipe-list {
            display: flex;
            flex-wrap: wrap;
            // border: 1px red solid;
            justify-content: space-between;
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
