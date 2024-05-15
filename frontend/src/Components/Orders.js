import React from 'react'
import Footer from './Footer'
import Header from './Header'
function Orders() {
  return (
    <>
   <Header/>
   <div className="card" style={{width: "18rem",marginLeft:"100px"}}>
  <img src="img/product/product-3.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
  <div className="product__item__text">
                                    <h6><a href="#">Fruits</a></h6>
                                    <h5>₹330.00</h5>
                                </div>
  </div>
</div>

   <Footer/> 
    </>
  )
}

export default Orders