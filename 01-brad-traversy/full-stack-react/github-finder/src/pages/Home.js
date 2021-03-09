import React, { Fragment } from "react";
import Users from "../components/users/Users";
import Search from "../components/users/Search";

export const Home = () => {
  return (
    <Fragment>
      <Search />
      <Users />
    </Fragment>
  );
};
