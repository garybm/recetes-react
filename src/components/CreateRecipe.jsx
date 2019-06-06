import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRecipe } from '../store/actions/recipeActions'

class CreateRecipe extends Component {
  state = {
    title: '',
    ingredient: '',
    description: ''
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




  render() {
    return (
      <div className="container">
        <style jsx>{`
          button {
            background-color: #95a00d;
            color: white;
            border: none;
            border-radius: 25px;
            width: 254px;
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
          <h5 className="grey-text text-darken-3">Add New Recipe</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Recipe Title</label>
          </div>
          <div className="input-field">
            <textarea id="ingredient" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="ingredient">Ingredient</label>
            <a class="btn-floating btn-small waves-effect waves-light"><i class="material-icons">add</i></a>
          </div>
          <div className="input-field">
            <textarea id="description" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="description">Description</label>
            <a class="btn-floating btn-small waves-effect waves-light"><i class="material-icons">add</i></a>
          </div>
          <div className="input-field">
            <button class="button">ADD</button>
          </div>
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


// <div>
//   <div className="buttonsMain">
//     <input
//       style={{display: 'none'}}
//       type="file"
//       onChange={this.handleChange}
//       ref={fileInput => this.fileInput = fileInput}/>
//     <button onClick={() => this.fileInput.click()}>Select File</button>
//     <button onClick={this.handleUpload}>Upload</button>
//   </div>
//   <progress className="uploader" value={this.state.progress}/>
//   <img src={this.state.url || 'https://via.placeholder.com/150'} alt="uploaded images"/>
// </div>
