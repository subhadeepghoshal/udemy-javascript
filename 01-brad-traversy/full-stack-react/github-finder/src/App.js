import React, { Component, Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import { about } from "./pages/about";
class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
  };

  searchUsers = async (text) => {
    const githubSearchURI = `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;

    console.log(githubSearchURI);

    this.setState({ loading: true });
    const res = await axios.get(githubSearchURI);
    this.setState({ users: res.data.items, loading: false });
  };

  getUser = async (username) => {
    const githubGetURI = `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;

    this.setState({ loading: true });
    const res = await axios.get(githubGetURI);
    this.setState({ user: res.data, loading: false });
  };

  getUserRepos = async (username) => {
    const githubReposURI = `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;

    console.log(githubReposURI);

    this.setState({ loading: true });
    const res = await axios.get(githubReposURI);
    this.setState({ repos: res.data, loading: false });
  };

  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 3000);
  };

  render() {
    const { users, user, repos, loading } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            {this.state.alert !== "" ? <Alert alert={this.state.alert} /> : ""}
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      setAlert={this.setAlert}
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      userExists={users.length > 0 ? true : false}
                    />
                    <Users users={users} loading={loading} />{" "}
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={about} />
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    getUserRepos={this.getUserRepos}
                    user={user}
                    repos={repos}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
