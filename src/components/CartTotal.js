import React from "react";
import { Link } from "react-router-dom";

export default function CartTotal({ value }) {
  const { cartSubtotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="mt-2 col-10 ms-sm-5 ms-md-auto col-sm-8 text-capitalize text-end">
            <Link to="/hpstore-react">
              <button
                className="px-5 mb-3 btn btn-outline-danger text-uppercase"
                type="button"
                onClick={() => clearCart()}
              >
                Clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title">subtotal: </span>
              <b>Rp. {cartSubtotal}</b>
            </h5>
            <h5>
              <span className="text-title">tax: </span>
              <b>Rp. {cartTax}</b>
            </h5>
            <h5>
              <span className="text-title">Total: </span>
              <b>Rp. {cartTotal}</b>
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
