import React from 'react';

const RecipeList = () => {
  return (
    <div className="recipe-list section">
      <style jsx>{`
      .card {
        border: 1px solid green;
      }
      `}</style>
      <div className="card z-depth-0 recipe-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">Recipe title</span>
          <p>Posted by Gary</p>
          <p className="grey-text">3rd of september, 2am</p>
        </div>
      </div>
      <div className="card z-depth-0 recipe-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">Recipe title</span>
          <p>Posted by Gary</p>
          <p className="grey-text">3rd of september, 2am</p>
        </div>
      </div>
      <div className="card z-depth-0 recipe-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">Recipe title</span>
          <p>Posted by Gary</p>
          <p className="grey-text">3rd of september, 2am</p>
        </div>
      </div>
    </div>
  )
}

export default RecipeList;
