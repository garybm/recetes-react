import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRecipe } from '../store/actions/recipeActions'
import {storage} from '../config/fbConfig.js';
import ImageUpload from './ImageUpload'


class CreateRecipe extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      image: null,
      url: '',
      progress: 0,
      description: '',
      ingredients:[{ name: "" }],
      directions: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }


  handleListIngredientChange = idx => evt => {
   const newList = this.state.ingredients.map((ingredient, sidx) => {
     if (idx !== sidx) return ingredient;
     return { ...ingredient, name: evt.target.value };
   });

   this.setState({ ingredients: newList });
 };


    handleSubmit = (e) => {
      e.preventDefault();
      this.props.createRecipe(this.state);
      this.props.history.push('/');
    }

    handleAddIngredient = () => {
      this.setState({
        ingredients: this.state.ingredients.concat([{ name: "" }])
      });
    };

    handleRemoveIngredient = idx => () => {
      this.setState({
        ingredients: this.state.ingredients.filter((s, sidx) => idx !== sidx)
      });
    };


  render() {
    return (
      <div className="container">
      <ImageUpload />
        <style jsx>{`
          body {
            background-color: #AFDAD3;
          }

          form {
            padding: 5%;
            margin-top:3%;
          }
          button {
            background-color: #95a00d;
            color: white;
            border: none;
            border-radius: 25px;
            width: 100px;
            height: 50px;
            cursor: pointer;
          }
          input[type=text]:not(.browser-default):focus:not([readonly]),
          input[type=email]:not(.browser-default):focus:not([readonly]),
          input[type=password]:not(.browser-default):focus:not([readonly]),
          textarea.materialize-textarea:focus:not([readonly]){
            border-color: #95a00d;
            box-shadow: none;
          }
          input[type=text]:not(.browser-default):focus:not([readonly]) + label,
          textarea.materialize-textarea:focus:not([readonly]) + label,
          input[type=email]:not(.browser-default):focus:not([readonly]) + label,
          input[type=password]:not(.browser-default):focus:not([readonly]) + label{
            color: #95a00d !important;
          }
          .btn-floating {
            background-color: #F2C743;
          }
          img {
             width: 300px;
             margin-bottom: 20px;
           }
           .buttonsMain {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
          }
          .uploader {
              -webkit-appearance: none;
              appearance: none;
              width: 50%;
              margin-bottom: 10px;
            }
          `}</style>
        <form className="white" onSubmit={this.handleSubmit}>

          <h5 className="grey-text text-darken-3">Create New Recipe</h5>
          <div className="input-field">
            <input
            type="text"
            id='title'
            value={this.state.title}
            onChange={this.handleChange} />
            <label htmlFor="title">Recipe Title</label>
          </div>
          <div className="input-field">
          <textarea
          id="description"
          className="materialize-textarea"
          value={this.state.description}
          onChange={this.handleChange}>
          </textarea>
          <label htmlFor="description">Description</label>
          </div>

          <p className="ingredient">Ingredients</p>
          {this.state.ingredients.map((ingredient, idx) => (
             <div className="ingredient">
               <input
                 type="text"
                 placeholder={`Ingredient ${idx + 1}`}
                 value={this.state.ingredients.name}
                 onChange={this.handleListIngredientChange(idx)}
               />
               <button
                 type="button"
                 onClick={this.handleRemoveIngredient(idx)}
               >
                 -
               </button>
             </div>
           ))}
           <button
             type="button"
             onClick={this.handleAddIngredient}
             className="small"
           >
             +
           </button>
          <div className="input-field">
            <textarea id="directions" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="directions">Directions</label>
          </div>
          <button class="button">ADD</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createRecipe: (recipe) => dispatch(createRecipe(recipe))
  }
}

export default connect(null, mapDispatchToProps)(CreateRecipe)
