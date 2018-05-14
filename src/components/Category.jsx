import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Clue from './Clue';

export class Category extends Component {
  constructor() {
    super();
    this.state = { clues: [] };
  }
  componentDidMount = async () => {
    const response = await fetch(
      `http://jservice.io/api/clues?category=${this.props.category.id}`
    );
    const toJSON = await response.json();
    this.setState({ clues: toJSON });
  };
  render() {
    return (
      <div>
        <Link className="link-home" to="/">
          <h4>Home</h4>
        </Link>
        <h2>{this.props.category.title}</h2>
        {this.state.clues.map(clue => {
          return <Clue clue={clue.id} clue={clue} />
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { category: state.category };
};

export default connect(mapStateToProps, null)(Category);
