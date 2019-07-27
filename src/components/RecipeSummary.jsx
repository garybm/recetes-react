import React from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import chifrijo from '../assets/images/chifrijo.jpg';

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
          <img src={ chifrijo }/>
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
