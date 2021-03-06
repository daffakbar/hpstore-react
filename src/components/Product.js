import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";
import propTypes from "prop-types";

class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="mx-auto my-3 col-9 col-md-6 col-lg-3">
        <div className="card">
          <ProductConsumer>
            {(value) => (
              <div
                className="p-3 img-container"
                onClick={() => value.handleDetail(id)}
              >
                {/* <Link to="/hpstore-react/details"> */}
                <div className="">
                  <img
                    src={img}
                    alt=""
                    className="card-img-top"
                    height="380px"
                  />
                </div>
                {/* </Link> */}
                <div className=" d-flex justify-content-between">
                  <Link to="/hpstore-react/details" className="btn btn-primary">
                    <button className="btn btn-primary me-2">Detail</button>
                  </Link>
                  <button
                    className="btn btn-danger"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? (
                      <p className="mb-0 text-capitalize">{""} In cart</p>
                    ) : (
                      <button className="btn btn-danger ">Add </button>
                    )}
                  </button>
                </div>
                {/* <div className=" card-footer d-flex justify-content-between">
                  <button className="btn btn-primary">Detail</button>
                  <button className="btn btn-danger">Add </button>
                </div> */}
              </div>
            )}
          </ProductConsumer>
          {/* product footer */}
          <div className=" card-footer d-flex justify-content-between">
            <p className="mb-0 align-self-center">{title}</p>
            <h5 className="mb-0 text-blue font-italic">
              <span className=" me-1">Rp.</span> {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

export default Product;
Product.propTypes = {
  product: propTypes.shape({
    id: propTypes.number,
    img: propTypes.string,
    title: propTypes.string,
    price: propTypes.number,
    inCart: propTypes.bool,
  }).isRequired,
};

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.06);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transition: all 1s linear;
    transform: translate(50%, 50%);
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;
