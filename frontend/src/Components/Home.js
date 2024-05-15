import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div className="humberger__menu__overlay"></div>
    
    <Header/>
      
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
      
      <section className="categories">
        <div className="container">
          <div className="row">
         
              <div className="col-md-3">
                {/* <div className="categories__item set-bg" data-setbg="" style={{backgroundImage:'url(img/categories/cat-1.jpg)'}}>
                            <h5><a href="#">Fresh Fruit</a></h5>
                        </div> */}

                <div class="card">
                  <img
                    src="img/categories/cat-1.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Fruits</h5>
                    <p class="card-text">
                    Fruit is the edible, usually sweet, fleshy part of a plant that typically contains seeds, available in a wide variety of shapes, sizes, colors, and flavors.
                    </p>
                   
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                {/* <div className="categories__item set-bg" data-setbg="" style={{backgroundImage:'url(img/categories/cat-1.jpg)'}}>
                            <h5><a href="#">Fresh Fruit</a></h5>
                        </div> */}

                <div class="card">
                  <img
                    src="img/categories/cat-2.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Nut Gifts</h5>
                    <p class="card-text">
                    Nuts are hard-shelled seeds with an edible kernel, rich in fats and protein. Types include almonds, walnuts, cashews, and peanuts, each with unique flavors and nutritional benefits.

                    </p>
                
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                {/* <div className="categories__item set-bg" data-setbg="" style={{backgroundImage:'url(img/categories/cat-1.jpg)'}}>
                            <h5><a href="#">Fresh Fruit</a></h5>
                        </div> */}

                <div class="card">
                  <img
                    src="img/categories/cat-3.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Vegetables </h5>
                    <p class="card-text">
                    Vegetables are edible plants with diverse colors and shapes, rich in vitamins and minerals. They can be eaten raw or cooked and are used in dishes like salads and soups.
                    </p>
                    
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                {/* <div className="categories__item set-bg" data-setbg="" style={{backgroundImage:'url(img/categories/cat-1.jpg)'}}>
                            <h5><a href="#">Fresh Fruit</a></h5>
                        </div> */}

                <div class="card">
                  <img
                    src="img/featured/plant.webp"
                    class="card-img-top"
                    alt="..."
                    height="265px"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Sapling Plants</h5>
                    <p class="card-text">
                     
Saplings are young trees that have recently begun to grow from seeds or cuttings. They are typically characterized by a slender trunk, flexible branches, and a developing root system. 
                    </p>
                    
                  </div>
                </div>
              </div>
             
            
          </div>
        </div>
      </section>
      <section className="featured spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Featured Product</h2>
              </div>
              <div className="featured__controls">
                {/* <ul>
                  <li className="active" data-filter="*">
                    All
                  </li>
                  <li data-filter=".oranges">Oranges</li>
                  <li data-filter=".fresh-meat">Fresh Meat</li>
                  <li data-filter=".vegetables">Vegetables</li>
                  <li data-filter=".fastfood">Fastfood</li>
                </ul> */}
              </div>
            </div>
          </div>
          <div className="row featured__filter">
            <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
              <div className="featured__item">
                <div
                  className="featured__item__pic set-bg"
                //   data-setbg="img/featured/feature-1.jpg"
                style={{backgroundImage:'url(img/featured/feature-1.jpg)'}}
                >
                  <ul className="featured__item__pic__hover">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-retweet"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6>
                    <a href="#">Fresh Meat</a>
                  </h6>
                  <h5>₹330.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
              <div className="featured__item">
                <div
                  className="featured__item__pic set-bg"
                //   data-setbg="img/featured/feature-2.jpg"
                style={{backgroundImage:'url(img/featured/feature-2.jpg)'}}
                
                >
                  <ul className="featured__item__pic__hover">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-retweet"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6>
                    <a href="#">Banana</a>
                  </h6>
                  <h5>₹40.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
              <div className="featured__item">
                <div
                  className="featured__item__pic set-bg"
                //   data-setbg="img/featured/feature-3.jpg"
                style={{backgroundImage:'url(img/featured/feature-3.jpg)'}}

                >
                  <ul className="featured__item__pic__hover">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-retweet"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6>
                    <a href="#">Guava</a>
                  </h6>
                  <h5>₹ 100.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
              <div className="featured__item">
                <div
                  className="featured__item__pic set-bg"
                //   data-setbg="img/featured/feature-4.jpg"
                style={{backgroundImage:'url(img/featured/feature-4.jpg)'}}

                >
                  <ul className="featured__item__pic__hover">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-retweet"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6>
                    <a href="#">Watermelon</a>
                  </h6>
                  <h5>₹ 30.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
              <div className="featured__item">
                <div
                  className="featured__item__pic set-bg"
                //   data-setbg="img/featured/feature-5.jpg"
                style={{backgroundImage:'url(img/featured/feature-5.jpg)'}}

                >
                  <ul className="featured__item__pic__hover">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-retweet"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6>
                    <a href="#">watermelon</a>
                  </h6>
                  <h5>₹30.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fastfood">
              <div className="featured__item">
                <div
                  className="featured__item__pic set-bg"
                //   data-setbg="img/featured/feature-6.jpg"
                style={{backgroundImage:'url(img/categories/cat-1.jpg)'}}

                >
                  <ul className="featured__item__pic__hover">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-retweet"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6>
                    <a href="#">Orange</a>
                  </h6>
                  <h5>₹ 150.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
              <div className="featured__item">
                <div
                  className="featured__item__pic set-bg"
                //   data-setbg="img/featured/feature-7.jpg"
                style={{backgroundImage:'url(img/featured/feature-7.jpg)'}}

                >
                  <ul className="featured__item__pic__hover">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-retweet"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6>
                    <a href="#">Mango</a>
                  </h6>
                  <h5>$300.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
              <div className="featured__item">
                <div
                  className="featured__item__pic set-bg"
                //   data-setbg="img/featured/feature-8.jpg"
                style={{backgroundImage:'url(img/featured/feature-8.jpg)'}}

                >
                  <ul className="featured__item__pic__hover">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-retweet"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6>
                    <a href="#">Apple</a>
                  </h6>
                  <h5>$400.00</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      
      
      <section className="from-blog spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title from-blog__title">
                <h2>From The Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="blog__item">
                <div className="blog__item__pic">
                  <img src="img/blog/blog-4.jpg" alt="" />
                </div>
                <div className="blog__item__text">
                  <ul>
                    <li>
                      <i className="fa fa-calendar-o"></i> May 4,2024
                    </li>
                    <li>
                      <i className="fa fa-comment-o"></i> 5
                    </li>
                  </ul>
                
                  <p>
                  The quality is top-notch, and the prices are very competitive. {" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="blog__item">
                <div className="blog__item__pic">
                  <img src="img/blog/blog-2.jpg" alt="" />
                </div>
                <div className="blog__item__text">
                  <ul>
                    <li>
                      <i className="fa fa-calendar-o"></i> May 4,2024
                    </li>
                    <li>
                      <i className="fa fa-comment-o"></i> 5
                    </li>
                  </ul>
                  
                  <p>
                  The website is user-friendly, and the ordering process was straightforward.
                  I'm impressed with the overall experience and will be a repeat customer for sure!{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="blog__item">
                <div className="blog__item__pic">
                  <img src="img/blog/blog-3.jpg" alt="" />
                </div>
                <div className="blog__item__text">
                  <ul>
                    <li>
                      <i className="fa fa-calendar-o"></i> May 4,2024
                    </li>
                    <li>
                      <i className="fa fa-comment-o"></i> 5
                    </li>
                  </ul>
                  
                  <p>
                  I've been using these agricultural products for a few months now, and I'm extremely satisfied with the results. {" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <Footer/>
    </>
  );
}

export default Home;
