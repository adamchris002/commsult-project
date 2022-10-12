import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import Register from "./pages/register";
import Login from "./pages/login";
import Home from "./pages/home";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "login",
      users: [],
    };
  }

  addUser = (user) => {
    this.setState({ users: this.state.users.concat(user)});
  };

  changePage = (newPage) => {
    this.setState({ page: newPage });
  };

  render() {
    return (
      <>
        <div className="App">
          {this.state.page === "login" ? (
            <Login changePage={this.changePage} users={this.state.users}/>
          ) : this.state.page === "home" ? (
            <Home changePage={this.changePage} />
          ) : (
            <Register changePage={this.changePage} addUser={this.addUser} />
          )}
        </div>
      </>
    );
  }
}

export default App;
