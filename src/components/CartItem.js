import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increase, decrease, removeItem } = value;
  return (
    <div className="row my-1 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          alt="product"
          className="img-fluid"
          style={{ width: "5rem", height: "5rem" }}
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product:</span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price:</span>
        {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-lg-0 my-2">
        <div className="d-flex justify-content-center">
          <div className="">
            <span className="btn btn-dark mx-1 " onClick={() => decrease(id)}>
              -
            </span>
            <span className="btn btn-dark mx-1 ">{count}</span>
            <span className="btn btn-dark mx-1 " onClick={() => increase(id)}>
              +
            </span>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash"></i>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <b className=" d-lg-none">item total :</b> <b> Rp. {total}</b>
      </div>
    </div>
  );
}
