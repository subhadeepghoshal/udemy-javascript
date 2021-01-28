import React, { Component } from "react";

class UserItem extends Component {
  render() {
    const { login, html_url, avatar_url } = this.props.user;
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
        <div>
          <a className="btn btn-dark btn-sm my-1" href={html_url}>
            more
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
