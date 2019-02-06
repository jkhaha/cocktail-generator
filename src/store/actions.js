// action creators
const getCocktail = (cocktail) => ({ type: 'GENERATE_COCKTAIL', payload: cocktail})

// thunk creators
export const loadCocktail = () => {
  return (dispatch) => {
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(res => dispatch(getCocktail(res)))
    .catch(console.error)
  }
}
