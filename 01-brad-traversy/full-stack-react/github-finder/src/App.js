import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import { about } from "./pages/about";
import GitHubState from "./context/github/GitHubState";

const App = () => {
  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <GitHubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            {alert !== "" ? <Alert alert={alert} /> : ""}
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      setAlert={showAlert}
                    />
                    <Users />{" "}
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={about} />
              <Route
                exact
                path="/user/:login"
                component={User}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GitHubState>
  );
};
export default App;
