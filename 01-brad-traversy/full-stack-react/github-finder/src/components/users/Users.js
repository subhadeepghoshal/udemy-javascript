import React from "react";
import UserItem from "./UserItem";

const Users = (props) => {
    return (
      <div style={UserStyle}>
        {props.users.map((user) => {
          return (
             <UserItem key={user.id} user={user}/>  
          );
        })}
      </div>
    );
}

const UserStyle = {
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    gridGap:'1rem'
}


export default Users;
