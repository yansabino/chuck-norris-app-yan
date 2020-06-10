import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from '../../style/app'
import { fetchJokesCategories, fetchJokeFromGivenCategorie } from '../../actions/jokes'


class AppContainer extends Component {

  componentDidMount(){
    this.props.fetchJokesCategories()
  }

  

  render() {

    const categories = this.props.categories.map((category) => (
      <button onClick={() => {this.props.fetchJokeFromGivenCategorie(category)}}>{category.toUpperCase()}</button>
    ))
    return (
      <>
      {categories}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.jokes.categories,
  category: state.jokes.category
});

const mapDispatchToProps = (dispatch) => ({
  fetchJokesCategories: () => dispatch(fetchJokesCategories()),
  fetchJokeFromGivenCategorie: (category) => dispatch(fetchJokeFromGivenCategorie(category))
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
