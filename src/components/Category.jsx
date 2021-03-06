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
        <h2>{this.props.category.title}</h2>
        {this.state.clues.map(clue => {
          return <Clue key={clue.id} clue={clue} />
        })}
      </div>
    );
  }
}
// separated components so testing doesnt require React Router enviornment
class LinkedCategory extends Component {
  render() {
    return (
      <div>
        <Link className="link-home" to="/">
          <h4>Home</h4>
        </Link>
        <Category category={this.props.category} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { category: state.category };
};

export default connect(mapStateToProps, null)(LinkedCategory);
