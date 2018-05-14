import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCategories, pickCategory } from '../actions'

class App extends Component {
  async componentDidMount() {
    if (this.props.categories.length === 0) {
      const response = await fetch("http://jservice.io/api/categories?count=20");
      const json = await response.json();
      this.props.setCategories(json);
    }
  }

  render() {
    return (
      <div>
        <h2>Jeopardy!</h2>
        {
          this.props.categories.map(category => {
            return (
              <div key={category.id}>
                <Link to='/category' onClick={() => this.props.pickCategory(category)}>
                <h4>{category.title}</h4>
              </Link>
              </div>
            )
          })
        }
      </div>
    )
  }
}
// setting redux state
const mapStateToProps = (state) => {
  return { categories: state.categories }
}
// connect(mapStateToProps, { what needs to be available as props })(Component)
export default connect(mapStateToProps, { setCategories, pickCategory })(App);
