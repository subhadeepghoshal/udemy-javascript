import React, { useEffect, Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import Repo from "../repos/Repo";
import GitHubContext from "../../context/github/GitHubContext";

const User = ({match}) => {
  const githubContext = useContext(GitHubContext);
  const {user,repos,getUser,getUserRepos} = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  },[]);

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
  } = user;
  
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
      <Repo repos={repos} />
    </Fragment>
  );
};

export default User;
