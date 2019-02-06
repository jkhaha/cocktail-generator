const initialState = {
  cocktail: null,
  photo: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case('GENERATE_COCKTAIL'):
      console.log(action.payload.drinks[0].strDrinkThumb);
      console.log("in generate cocktail", action.payload.drinks[0]);
      return {...state, cocktail: action.payload.drinks[0].strDrink}
  default:
    return state
  }
}

export default reducer;
