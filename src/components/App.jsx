import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCategories } from '../actions'

class App extends Component {

  async componentDidMount() {
    if (this.props.categories.length === 0) {
      const response = await fetch("http://jservice.io/api/categories?count=20");
      const json = await response.json();
      this.props.setCategories(json);
    }
  }

  render() {
    console.log(this.props)

    return (
      <div>
        <h2>Jeopardy!</h2>
      </div>
    )
  }
}
// setting redux state
const mapStateToProps = (state) => {
  return { categories: state }
}
// connect(mapStateToProps, { what needs to be available as props })(Component)
export default connect(mapStateToProps, { setCategories })(App);
