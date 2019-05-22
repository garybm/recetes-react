import React from 'react';

const RecipeSummary = ({recipe}) => {
  return (
    <div className="card z-depth-0 recipe-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{recipe.title}</span>
        <p>{recipe.content}</p>
        <p>{recipe.description}</p>
        <p className="grey-text">3rd of september, 2am</p>
      </div>
    </div>
  )
}


export default RecipeSummary;
