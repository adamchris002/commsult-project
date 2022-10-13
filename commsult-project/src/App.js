import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import Register from "./pages/register";
import Login from "./pages/login";
import Home from "./pages/home";
import Cart from "./pages/cart";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "login",
      users: [],
      carts: [],
    };
  }

  addUser = (user) => {
    this.setState({ users: this.state.users.concat(user)});
  };

  addCart = (items) => {
    this.setState({ carts: this.state.carts.concat(items)});
  }

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
            <Home changePage={this.changePage} users={this.state.users} addCart={this.addCart}/>
          ) : this.state.page === "cart" ? (
            <Cart changePage={this.changePage} carts={this.state.carts}/>
          ) : (
            <Register changePage={this.changePage} addUser={this.addUser} />
          )}
        </div>
      </>
    );
  }
}

export default App;
