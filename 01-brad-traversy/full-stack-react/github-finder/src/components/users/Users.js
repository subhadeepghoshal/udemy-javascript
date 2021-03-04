import React ,{useContext} from "react";
import UserItem from "./UserItem";
import Spinner from '../layout/Spinner'

import GitHubContext from "../../context/github/GitHubContext";

const Users = () => {
  const githubContext = useContext(GitHubContext);
  const {users, loading} = githubContext;

  if (loading) {
    return <Spinner/>
  } else {
    return (
      <div style={UserStyle}>
        {users.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  }
};

const UserStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

export default Users;
