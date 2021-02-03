import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  async componentDidMount() {
    const githubURI = `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    
    console.log(githubURI)
    this.setState({ loading: true });
    //await timeout(1000)
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID)
    const res = await axios.get(githubURI);
        this.setState({ users: res.data, loading: false });
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

/* function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
} */

export default App;
