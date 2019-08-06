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
      ingredients:[{ ingredient: "" },{ ingredient: "" },{ ingredient: "" }],
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

  addIngredient(){
    this.setState({ingredients: [...this.state.ingredients,""]}
    )
  }

  handleIngredientChange(e, index){
    console.log(e);
    e.preventDefault();
    this.state.ingredients[index] = e.target.value
    this.setState({ingredients: this.state.ingredients})
  }

  handleIngredientRemove(index){
    this.state.ingredients.splice(index, 1)
    this.setState({ingredients: this.state.ingredients})
  }

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
          <div className="input-field">
            <p>List your ingredients one at a time:</p>
              {this.state.ingredients.map((ingredient, index) =>{
                return (
                  <div key={index}>
                  <input
                  type="text"
                  value={this.state.ingredient}
                  onChange={(e) =>this.handleIngredientChange(e, index)}/>
                  <button onClick={(ingredient)=>this.handleIngredientRemove(ingredient, index)}>-</button>
                  </div>
                )
              })
            }
          </div>
          <button
            type="button"
            onClick={(e) =>this.addIngredient(e)}
            className="small">+</button>

          <p>Add your instructions one at a time:</p>

            <button
              type="button"
              className="small"
            >
              +
            </button>
          <button onClick={(e)=>this.handleSubmit(e)} class="button">PUBLISH!</button>
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
