import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Repo from "../repos/Repo"

export default class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }
  render() {
    const {
      login,
      avatar_url,
      gravatar_id,
      html_url,
      name,
      company,
      blog,
      location,
      email,
      hireable,
      bio,
      public_repos,
      public_gists,
      followers,
      following,
    } = this.props.user;
    return (
      <Fragment>
        <Link to="/" className="btn btn-light">
          Back To Seach
        </Link>
        Hireable:{""}
        {hireable ? (
          <i className="fas fa-check text-success" />
        ) : (
          <i className="fas fa-times-circle text-danger" />
        )}
        <div className="card grid-2">
          <div className="all-centre">
            <img
              src={avatar_url}
              className="round-img"
              alt=""
              style={{ width: "150px" }}
            />
            <h1>{name}</h1>
            <p>location: {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
          </div>
        </div>
        <div className="card text-right">
          <div className="badge badge-primary">followers:{followers}</div>
          <div className="badge badge-success">following:{following}</div>
          <div className="badge badge-light">Public Repos:{public_repos}</div>
          <div className="badge badge-dark">Public Gists:{public_gists}</div>
        </div>
        <Repo repos={this.props.repos}/>
      </Fragment>
    );
  }
}
