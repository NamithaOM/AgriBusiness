import React from "react";
import Header from "../Components/Header";
function FarmerHome(){
    return(
<>
<div className="humberger__menu__overlay"></div>
    
    <Header/>
      <div>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="hero__categories">
                <div className="hero__categories__all">
                  <i className="fa fa-bars"></i>
                  <span>All departments</span>
                </div>
                <ul>
                 
                  <li>
                    <a href="#">Vegetables</a>
                  </li>
                  <li>
                    <a href="#">Fruit </a>
                  </li>
                  <li>
                    <a href="#">Nut Gifts</a>
                  </li>
                  <li>
                    <a href="#">Butter & Eggs</a>
                  </li>
                 
                  <li>
                    <a href="#">Organic Fertilizer</a>
                  </li>
                  
                  <li>
                    <a href="#">Sapling plant</a>
                  </li>
                  <li>
                    <a href="#">Milk</a>
                  </li>
                  <li>
                    <a href="#">Diary Products</a>
                  </li>
                  <li>
                    <a href="#">Vegetables</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9">
              <div
                className="hero__item set-bg"
                style={{ backgroundImage: "url(img/hero/banner.jpg)" }}
              >
                <div className="hero__text">
                  <span>FRUIT FRESH</span>
                  <h2>
                    Vegetable <br />
                    100% Organic
                  </h2>
                  <p>Free Pickup and Delivery Available</p>
                  <a href="#" className="primary-btn">
                    SHOP NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      </>
    )
}
export default FarmerHome