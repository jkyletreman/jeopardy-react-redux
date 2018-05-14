import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

export class Category extends Component {
  render() {
    return (
      <div>
        <Link className='link-home' to="/">
          <h4>Home</h4>
        </Link>
        <h2>Categories:</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { category: state.category }
}

export default connect(mapStateToProps, null)(Category);
