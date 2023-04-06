import React from "react";
import img1 from "./img1.jpg";
import "./style.css";

function App() {
  return (
    <div className="products">
      <div className="container">
        <div className="row card-deck">
          <div className="col-lg-4">
            <div className="card">
              <img src={img1} className="card-img-top" alt="Product 1" />
              <div className="card-body">
                <h5 className="card-title">Product Name</h5>
                <p className="card-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore ad unde maxime sed quaerat harum recusandae beatae.
                  Minus, totam. Fugit.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm">
                      View
                    </button>
                    <button type="button" className="btn btn-sm">
                      Send in Chat
                    </button>
                  </div>
                  <span className="price">$19.99</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <img src={img1} className="card-img-top" alt="Product 2" />
              <div className="card-body">
                <h5 className="card-title">Product Name</h5>
                <p className="card-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore s reiciendis sint vel at veritatis, voluptate natus
                  id nihil expedita.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm">
                      View
                    </button>
                    <button type="button" className="btn btn-sm">
                      Send in Chat
                    </button>
                  </div>
                  <span className="price">$159.99</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <img src={img1} className="card-img-top" alt="Product 3" />
              <div className="card-body">
                <h5 className="card-title">Product Name</h5>
                <p className="card-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore ad unde maxime sed quaerat harum recusandae beatae.
                  Minus, totam. Fugit,expedita.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm">
                      View
                    </button>
                    <button type="button" className="btn btn-sm">
                      Send in Chat
                    </button>
                  </div>
                  <span className="price">$89.99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
