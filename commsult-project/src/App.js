import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import Register from "./pages/register";
import Login from "./pages/login";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "login",
      
    };
  }
  changePage = (newPage) => {
    this.setState({ page: newPage });
  };

  render() {
    return (
      <>
        <div className="App">
          {this.state.page === "login" ? (
            <Login changePage={this.changePage} />
          ) : (
            <Register changePage={this.changePage} />
          )}
        </div>
      </>
    );
  }
}

export default App;
