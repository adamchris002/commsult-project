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
      currentUser: "",
    };
  }

  getCurrentUser = (user) => {
    this.setState({ currentUser: user });
  };

  addUser = (user) => {
    this.setState({ users: this.state.users.concat(user) });
  };

  addCart = (items) => {
    this.setState({ carts: this.state.carts.concat(items) });
  };

  removeCart = (item) => {
    this.setState({
      carts: this.state.carts.filter((element) => {
        if (element.id === item.id) {
          return false;
        } else {
          return true;
        }
      }),
    });
  };

  changePage = (newPage) => {
    this.setState({ page: newPage });
  };

  render() {
    return (
      <>
        <div className="App">
          {this.state.page === "login" ? (
            <Login
              changePage={this.changePage}
              users={this.state.users}
              getCurrentUser={this.getCurrentUser}
            />
          ) : this.state.page === "home" ? (
            <Home
              changePage={this.changePage}
              users={this.state.users}
              addCart={this.addCart}
              currentUser={this.state.currentUser}
            />
          ) : this.state.page === "cart" ? (
            <Cart
              changePage={this.changePage}
              carts={this.state.carts}
              removeCart={this.removeCart}
            />
          ) : (
            <Register changePage={this.changePage} addUser={this.addUser} />
          )}
        </div>
      </>
    );
  }
}

export default App;
