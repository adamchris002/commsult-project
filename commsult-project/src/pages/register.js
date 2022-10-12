import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "../App.css";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      username: "",
      password: "",
      names: [], 
      emails: [],
      usernames: [],
      passwords: []
    };
  }

  createUser = () => {
    this.setState({
        names: [...this.state.names, this.state.name],
        emails: [...this.state.emails, this.state.email],
        usernames: [...this.state.usernames, this.state.username],
        passwords: [...this.state.passwords, this.state.password],
        
      });
  }

  render() {
    return (
      <div className="Register">
        <header className="header-register">
          <h1 className="judul-register">E-Commerce</h1>
        </header>
        <div>
          <div className="container halaman-register">
            <div className="box ">
              <img src={"/logo.png"} alt="logo" className="logo-web" />
              <h1 className="judul-register-form">Register Form</h1>
              <div
                className="mini-box"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <label className="label-box">Name: </label>
                <input
                  className="form-control input-register"
                  onChange={(event) =>
                    this.setState({ name: event.target.value })
                  }
                ></input>
              </div>
              <div
                className="mini-box"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <label className="label-box">E-mail: </label>
                <input className="form-control input-register" onChange={(event) =>
                    this.setState({ email: event.target.value })
                  }></input>
              </div>
              <div
                className="mini-box"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <label className="label-box">Username: </label>
                <input className="form-control input-register" onChange={(event) =>
                    this.setState({ username: event.target.value })
                  }></input>
              </div>
              <div
                className="mini-box"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <label className="label-box">Password: </label>
                <input className="form-control input-register" onChange={(event) =>
                    this.setState({ password: event.target.value })
                  } type="password"></input>
              </div>
              <div>
                <a href="">Already have an account? click here to login</a>
                <br />
                <button className="btn btn-primary button-register" onClick={this.createUser} >
                  Register
                </button>
                <p>{this.state.names}</p>
                <p>{this.state.emails}</p>
                <p>{this.state.usernames}</p>
                <p>{this.state.passwords}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
