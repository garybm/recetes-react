const initState = {
  recipes: [
    {id: '1', title: 'help me find peach', ingredient: 'blah blah blah', description: 'blah blah blah'},
    {id: '2', title: 'collect all the stars', ingredient: 'blah blah blah', description: 'blah blah blah'},
    {id: '3', title: 'egg hunt with yoshi', ingredient: 'blah blah blah', description: 'blah blah blah'}
  ]
}

const recipeReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_RECIPE':
      console.log('create recipe :)', action.recipe);
      return state;
        case 'CREATE_RECIPE_ERROR':
      console.log('create project error :)', action.err);
        return state;
      default:
        return state;
  }
};

export default recipeReducer;
