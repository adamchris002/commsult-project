import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "../App.css";

class Login extends React.Component {
  onLogin = () => {
    this.props.changePage("home");
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
              <div
                className="mini-box"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <label className="label-username">Username: </label>
                <input className="form-control input-login"></input>
              </div>
              <div
                className="mini-box"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <label className="label-password">Password: </label>
                <input className="form-control input-login"></input>
              </div>
              <div>
                <a 
                    href="/" 
                    onClick={e => {
                        e.preventDefault()
                        this.onLogin()
                    }} 
                >
                    Don't have an account yet? register here
                </a>
                <br />
                <button className="btn btn-primary button-login">Login</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
