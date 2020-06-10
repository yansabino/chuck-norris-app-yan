import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from '../../style/app'
import { fetchJokesCategories } from '../../actions/jokes'


class AppContainer extends Component {

  componentDidMount(){
    this.props.fetchJokesCategories()
  }

  render() {
    return (
      <>
      {this.props.categories.map((category) => (
        <h1>{category}</h1>
      ))}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.jokes.categories,
});

const mapDispatchToProps = (dispatch) => ({
  fetchJokesCategories: () => dispatch(fetchJokesCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
