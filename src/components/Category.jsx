import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Category extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <h4>Home</h4>
        </Link>
        <h2>Categories:</h2>
      </div>
    );
  }
}

export default Category;
