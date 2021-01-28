import React, { Component } from "react";
import UserItem from "./UserItem";

export class Users extends Component {
  state = {
    users: [
      {
        login: "mojombo",
        id: 1,
        node_id: "MDQ6VXNlcjE=",
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/mojombo",
        html_url: "https://github.com/mojombo",
      },
      {
        login: "defunkt",
        id: 2,
        node_id: "MDQ6VXNlcjI=",
        avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/defunkt",
        html_url: "https://github.com/defunkt",
      },
      {
        login: "pjhyett",
        id: 3,
        node_id: "MDQ6VXNlcjM=",
        avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/pjhyett",
        html_url: "https://github.com/pjhyett",
      },
    ],
  };
  render() {
    return (
      <div style={UserStyle}>
        {this.state.users.map((user) => {
          return (
             <UserItem key={user.id} user={user}/>  
          );
        })}
      </div>
    );
  }
}

const UserStyle = {
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    gridGap:'1rem'
}


export default Users;
