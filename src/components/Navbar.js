import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../logo.svg";
// import styled from "styled-components";
import { ButtonContainer } from "./styles/Button";
class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/hpstore-react">
          <img src={logo} alt="" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="ml-5 nav-item">
            <Link to="/hpstore-react" className="nav-link">
              Products
            </Link>
          </li>
        </ul>

        <Link to="/hpstore-react/cart" className="ms-auto">
          <ButtonContainer>
            <span className="me-2">
              <i className="fas fa-cart-plus"> </i>
            </span>
            My Cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

export default Navbar;
const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
