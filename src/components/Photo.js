import React, { Component } from 'react';
import { loadCocktail } from '../store/actions'
import {connect} from 'react-redux';

class Photo extends Component {
  render(){
    console.log("props", this.props);
    return(
      <div>
        <div>
          <button className="button" onClick={this.props.loadCocktail}>CLICK ME!</button>
        </div>
        <div>
          <p className="drink_name">{this.props.cocktail}</p>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
    loadCocktail: () => dispatch(loadCocktail())
})

const mapStateToProps = (state) => ({
  cocktail: state.cocktail,
  image: state.image
})

export default connect(mapStateToProps, mapDispatchToProps)(Photo);
