import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "../App.css";
import axios from "axios";

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newCart: [],
    };
  }
  backToHome = () => {
    this.props.changePage("home");
  };

  removeCart = (item) => (e) => {
    e.preventDefault(e);
    this.props.removeCart(item);
  };

  render() {
    return (
      <>
        <div className="cart-div">
          <button className="btn btn-warning" onClick={this.backToHome}>
            Back to Home
          </button>
          <div className="div-lagi">
            <h1 className="text-center cart-title">Your Cart</h1>
          </div>
        </div>
        <div className="container">
          <hr />
          <div className="row">
            {this.props.carts.map((item) => (
              <div className="col-6 col-md-3">
                <div className="card">
                  <img
                    src={item.image}
                    className="card-img-top gambar-card"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text card-text">{item.detail}</p>
                    <div
                      className="ini-span"
                      style={{
                        display: "flex",
                        margin: 5,
                      }}
                    >
                      <span className="span-cart">
                        <button
                          className="btn btn-danger"
                          onClick={this.removeCart(item)}
                        >
                          Remove
                        </button>
                        <p className="harga-cart">Rp. {item.price}</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Cart;
