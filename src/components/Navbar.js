import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../drink.png";
import cart from "../cart.png";
// import styled from "styled-components";
import { ButtonContainer } from "./styles/Button";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar-expand-sm navbar navbar-dark bg-success px-sm-5">
        <Link to="/hpstore-react">
          <img src={logo} alt="" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="ml-5 nav-item">
            <Link to="/hpstore-react" className="nav-link text-white">
              JUICE
            </Link>
          </li>
        </ul>

        <Link to="/hpstore-react/cart" className="ms-auto">
          <button className="btn btn-outline-light">
            <span className="me-2">
              <img src={cart} alt="" />
            </span>
            CART
          </button>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
