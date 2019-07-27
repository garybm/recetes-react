import React from 'react';
import RecipeSummary from './RecipeSummary'
import { Link } from 'react-router-dom'

const RecipeList = ({recipes}) => {
  return (
    <div className="summary ">
    <style jsx>{`
       .summary {
         // border: 1px red solid;
         display: flex;
         flex-wrap: wrap;
         justify-content: flex-start;
       }
       .recipe-list {
         display: flex;
         flex-wrap:wrap;
         // border: 1px red solid;

         margin: 1.5%;
       }
       `}</style>
      { recipes && recipes.map(recipe => {
        return (

            <Link className="recipe-list" to={ '/recipe/' + recipe.id} key={recipe.id}>
              <RecipeSummary recipe={recipe}/>
            </Link>

        )
      })}
    </div>
  )
}

export default RecipeList;
