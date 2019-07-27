import React from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import dish from '../assets/images/dish.jpg';

const RecipeSummary = ({recipe}) => {
  return (

      <div class="card">
      <style jsx>{`
        .card {
          width: 270px;
          // border: 1px red solid;
        }
        `}</style>
        <div class="card-image">
          <img src={ dish }/>
        </div>
        <div class="card-content">
          <span class="card-title">{recipe.title}</span>
          <p>by: {recipe.authorFirstName}</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>

  )
}


export default RecipeSummary;
