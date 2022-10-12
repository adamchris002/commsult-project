import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "../App.css";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "login",
      username: "",
      password: "",
      errorMessage: "",
      showUserError: false,
    };
  }

  goToRegister = () => {
    this.props.changePage("register");
  };

  login = () => {
    this.props.users.forEach((user) => {
      if (
        user.username === this.state.username &&
        user.password === this.state.password
      ) {
        this.props.changePage("home");
      } else {
        this.setState({
          errorMessage: "the username and password is incorrect",
          showUserError: this.state.username == "",
          showUserError: this.state.password == "",
        });
      }
    });
  };

  render() {
    return (
      <>
        <header className="header-login">
          <h1 className="judul-login">E-Commerce</h1>
        </header>
        <div>
          <div className="container halaman-login">
            <div className="box ">
              <img src={"/logo.png"} alt="logo" className="logo-web" />
              <h1 className="judul-login-form">Login Form</h1>
              {
                this.state.showUserError ? <div
                class="alert alert-danger d-flex align-items-center"
                role="alert"
              >
                <div>{this.state.errorMessage}</div>
              </div> : ""
              }
              <div
                className="mini-box"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <label className="label-box">Username: </label>
                <input
                  className="form-control input-login"
                  onChange={(event) =>
                    this.setState({ username: event.target.value })
                  }
                ></input>
              </div>
              {
                this.state.showUserError ? <div
                class="alert alert-danger d-flex align-items-center"
                role="alert"
              >
                <div>{this.state.errorMessage}</div>
              </div> : ""
              }
              <div
                className="mini-box"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <label className="label-box">Password: </label>
                <input
                  className="form-control input-login"
                  type="password"
                  onChange={(event) =>
                    this.setState({ password: event.target.value })
                  }
                ></input>
              </div>
              <div>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    this.goToRegister();
                  }}
                >
                  Don't have an account yet? register here
                </a>
                <br />
                <button
                  className="btn btn-primary button-login"
                  onClick={this.login}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
