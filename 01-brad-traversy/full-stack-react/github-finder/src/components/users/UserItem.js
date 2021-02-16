import React from "react";
import {Link} from "react-router-dom"

const UserItem = (props) => {
    const { login, avatar_url } = props.user;
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
          <Link className="btn btn-dark btn-sm my-1" to={`/user/${login}`}> more </Link>
        </div>
      </div>
    );
}

export default UserItem;
