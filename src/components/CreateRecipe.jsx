import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRecipe } from '../store/actions/recipeActions'
import {storage} from '../config/fbConfig.js';
// import ImageUpload from './ImageUpload'


class CreateRecipe extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      image: null,
      url: '',
      progress: 0,
      description: '',
      ingredients:[{ name: "" },{ name: "" },{ name: "" }],
      directions: [{ direction: "" },{ direction: "" },{ direction: "" }]
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createRecipe(this.state);
    this.props.history.push('/');
  }

//Ingredients:


  handleListIngredientChange = idx => evt => {
   const newList = this.state.ingredients.map((ingredient, sidx) => {
     if (idx !== sidx) return ingredient;
     return { ...ingredient, name: evt.target.value };
   });

   this.setState({ ingredients: newList });
 };

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

//Directions



  handleDirectionsDirectionChange = idx => evt => {
   const newDirections = this.state.directions.map((direction, sidx) => {
     if (idx !== sidx) return direction;
     return { ...direction, direction: evt.target.value };
   });

   this.setState({ directions: newDirections });
 };

    handleAddDirection = () => {
      this.setState({
        directions: this.state.directions.concat([{ name: "" }])
      });
    };

    handleRemoveDirection = idx => () => {
      this.setState({
        directions: this.state.directions.filter((s, sidx) => idx !== sidx)
      });
    };

  render() {
    return (
      <div className="container">
        <style jsx>{`
          body {
            // background-color: #AFDAD3;
          }

          form {
            width:70%;
            padding: 5%;
            margin:3% 10%;
            border: 1px solid gray;
          }
          button {
            color: gray;
            border: 1px solid gray;
            // border-radius: 25px;
            width: 100px;
            height: 45px;
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

            h5  {
              border-bottom: 1px solid gray;
              padding-bottom: 10px;
            }
            textarea {
              backgroud-color: gray;
            }
          `}</style>
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="create grey-text text-darken-3">ADD A NEW RECIPE</h5>
          <p className="ingredient1">Recipe Title:</p>
          <div className="input-field">
            <input
            type="text"
            id='title'
            value={this.state.title}
            onChange={this.handleChange} />
            <label htmlFor="title">What's the title for your recipe?</label>
          </div>
          <p className="ingredient1">Recipe Description:</p>
          <div className="input-field">
          <textarea
          id="description"
          className="materialize-textarea"
          value={this.state.description}
          onChange={this.handleChange}>
          </textarea>
          <label htmlFor="description">Tell us about your recipe.</label>
          </div>
          <p>List your ingredients one at a time:</p>
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

           <p>Add your instructions one at a time:</p>
           {this.state.directions.map((direction, idx) => (
              <div className="direction">
                <textarea
                  type="text"
                  placeholder={` ${idx +1 }`}
                  value={this.state.directions.direction}
                  onChange={this.handleDirectionsDirectionChange(idx)}
                />
                <button
                  type="button"
                  onClick={this.handleRemoveDirection(idx)}
                >
                  -
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={this.handleAddDirection}
              className="small"
            >
              +
            </button>
          <button class="button">PUBLISH!</button>
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
