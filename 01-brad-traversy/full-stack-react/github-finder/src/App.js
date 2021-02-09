import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
class App extends Component {
  state = {
    users: [],
    loading: false,
    alert:null
  };

  searchUsers = async (text) => {
    const githubSearchURI = `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;

    console.log(githubSearchURI);

    this.setState({ loading: true });
    const res = await axios.get(githubSearchURI);
    this.setState({ users: res.data.items, loading: false });
  };

  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  setAlert =(msg,type)=> {
    this.setState({alert:{msg,type}})
    setTimeout(()=>{this.setState({alert:null})},3000)
  }

  render() {
    const {users, loading} = this.state
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          {this.state.alert !==''?(<Alert alert={this.state.alert}/>):''}
          <Search setAlert={this.setAlert} searchUsers={this.searchUsers} clearUsers={this.clearUsers} 
            userExists={users.length>0?true:false}
          />
          <Users users={users} loading={loading} />
        </div>
      </div>
    );
  }
}
export default App;
