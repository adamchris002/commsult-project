import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "../App.css";

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state= {
            page: "home"
        }
    }

    onHome = () => {
        this.props.changePage("login");
      };


  render() {
    return (
      <>

        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container" style={{justifyContent: "left"}}>
            <img src={"logo.png"} alt="ini logo dari website" className="logo-home"/>
            <a className="navbar-brand ms-3 tombol-menu" href="#">
              Home
            </a>
          </div>
          <div className="search-bar">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
              <button className="btn btn-danger ms-2" onClick={this.onHome}>Logout</button>
            </form>
          </div>
        </nav>
        <div className="container isinya">
          <div className="row justify-content-center">
          <div className="col-6 col-md-3">
            <div className="card">
              <img src={"logo.png"} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card">
              <img src={"logo.png"} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card">
              <img src={"logo.png"} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card">
              <img src={"logo.png"} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
