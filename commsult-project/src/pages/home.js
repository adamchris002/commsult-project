import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "../App.css";
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "home",
      items: [],
      search: "",
      cart: [],
    };
  }

  onHome = () => {
    this.props.changePage("login");
  };

  componentDidMount() {
    axios.get("https://online.akomate.com/atma/api/products").then((res) => {
      this.setState({
        items: res.data,
      });
      console.log(this.state.items);
    });
  }

  addToCart = (item) => (e) => {
    e.preventDefault(e);
    this.props.addCart(item);
  };

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container" style={{ justifyContent: "left" }}>
            <img
              src={"logo.png"}
              alt="ini logo dari website"
              className="logo-home"
            />
            <a
              className="navbar-brand ms-3 tombol-menu"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                this.props.changePage("home");
              }}
            >
              Home
            </a>
            <a
              className="navbar-brand ms-3 tombol-menu"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                this.props.changePage("cart");
              }}
            >
              Cart
            </a>
          </div>
          <div className="search-bar">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 ini-bar"
                type="search"
                placeholder="Search"
                onChange={(event) =>
                  this.setState({ search: event.target.value })
                }
              />
              <button className="btn btn-danger ms-2" onClick={this.onHome}>
                Logout
              </button>
            </form>
          </div>
        </nav>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="false"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={"iphone14.png"}
                className="d-block w-100 carousel-img"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Iphone 14 Pro</h5>
                <p>All new Iphone 14 is here. Get it now!</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={"halloween.jpg"}
                className="d-block w-100 carousel-img"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Halloween Month Discount</h5>
                <p>
                  Get up to 50% of discount on your purchases for this month
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={"event.jpg"}
                className="d-block w-100 carousel-img"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Limited Time Discount</h5>
                <p>Limited time discount for this month. Get it now!</p>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div>
          <h3 className="hello">Welcome, {this.props.currentUser.name}</h3>
        </div>
        <br />
        <br />
        <div className="container isinya">
          <hr />
          <h4 className="for-you">For You</h4>
          <br />
          <br />
          <div className="row">
            {this.state.items
              .filter((element) => {
                  return element.name.includes(this.state.search);
              })
              .map((element) => {
                return (
                  <>
                    <div className="col-6 col-md-3">
                      <div className="card">
                        <img
                          src={element.image}
                          className="card-img-top gambar-card"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">{element.name}</h5>
                          <p className="card-text card-text">
                            {element.detail}
                          </p>
                          <span className="ini-span">
                            <a
                              href="/"
                              className="btn btn-primary add-cart"
                              onClick={this.addToCart(element)}
                            >
                              Add to Cart
                            </a>
                            <p className="harga">Rp. {element.price}</p>
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default Home;
