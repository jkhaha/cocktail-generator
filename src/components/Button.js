import React, { Component } from 'react';
import { connect } from 'react-redux'


class Button extends Component {
  render(){
    return(
      <div>
        <p> button </p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    randomDrinks: state.cocktail
  }
}

export default connect(mapStateToProps)(Button);
