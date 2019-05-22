import React from 'react';
import olla from '../assets/images/olla.jpg';

const RecipeSummary = ({recipe}) => {
  return (
    <div className="card z-depth-0 recipe-summary">
      <style jsx>{`
          img {
            width: 100%;
          }
          .card {
            border: 1px #95a00d solid;
            width: 50%;
          }
      `}</style>
      <div className="card-content grey-text text-darken-3">
        <img  src={olla}
          alt='PGE Company Logo'/>
        <span className="card-title">{recipe.title}</span>
        <p>{recipe.description}</p>
        <p className="grey-text">3rd of september, 2am</p>
      </div>
    </div>
  )
}


export default RecipeSummary;
