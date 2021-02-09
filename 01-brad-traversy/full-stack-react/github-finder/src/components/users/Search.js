import React, { Component } from "react";

export default class Search extends Component {
  state = {
    text: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    const { userExists, clearUsers } = this.props;
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Search ...."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            name="submit"
            value="search"
            className="btn btn-dark btn-block"
          />
          {userExists && (
            <button
              className="btn btn-block btn-light"
              onClick={clearUsers}
            >
              clear
            </button>
          )}
        </form>
      </div>
    );
  }
}
