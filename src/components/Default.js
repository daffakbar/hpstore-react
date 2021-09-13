import React, { Component } from "react";

class Default extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="pt-5 mx-auto text-center col-10 text-title text-uppercase">
            <h1 className=" display-3"> 404 Not Found</h1>
            <h1> Error</h1>
            <h2> Page Not Found</h2>
            <h3>
              the requested url{" "}
              <span className="text-danger">
                {this.props.location.pathname}
              </span>{" "}
              was not found
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Default;
