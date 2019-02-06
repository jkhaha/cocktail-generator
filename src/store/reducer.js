const initialState = {
  cocktail: null,
  photo: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case('GENERATE_COCKTAIL'):
      console.log(action.payload.drinks[0].strDrinkThumb);
      return {...state, cocktail: action.payload.drinks[0].strDrink, photo: action.payload.drinks[0].strDrinkThumb}
  default:
    return state
  }
}

export default reducer;
