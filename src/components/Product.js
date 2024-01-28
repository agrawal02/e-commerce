import React from 'react'
import "../CSS Styles/Product.css"
import product1 from "../Images/product_img1.jpg"
import watch from "../Images/watch.png"
import shoes from "../Images/shoes.jpg"
import phone from "../Images/phone.png"
import headphone from "../Images/headphone.png"

const Product = () => {
  return (
    <div>
         <section className="product" id="product">
            <h1 className="heading">latest <span>Products</span></h1>
            <div className="box-container">
                <div className="box">
                    <div className="icons">
                        <a href="#" className="fa fa-heart"></a>
                        <a href="#" className="fa fa-share"></a>
                        <a href="#" className="fa fa-eye"></a>
                    </div>
                    <div className="content">
                        <img src={product1} alt=""/>
                        <h3>Women dress</h3>
                        <div className="price">$200 <span>$150</span></div>
                        <button type="button" className='btn'>Add to cart</button>
                    </div>
                </div>
                <div className="box">
                    <div className="icons">
                        <a href="#" className="fa fa-heart"></a>
                        <a href="#" className="fa fa-share"></a>
                        <a href="#" className="fa fa-eye"></a>
                    </div>
                    <div className="content">
                        <img src={watch} alt="" />
                        <h3>Watch</h3>
                        <div className="price">$200 <span>$150</span></div>
                        <button type="button" className='btn'>Add to cart</button>
                    </div>
                </div>
                <div className="box">
                    <div className="icons">
                        <a href="#" className="fa fa-heart"></a>
                        <a href="#" className="fa fa-share"></a>
                        <a href="#" className="fa fa-eye"></a>
                    </div>
                    <div className="content">
                        <img src={shoes} alt="" />
                        <h3>Shoes</h3>
                        <div className="price">$200 <span>$150</span></div>
                        <button type="button" className='btn'>Add to cart</button>
                    </div>
                </div>
                <div className="box">
                    <div className="icons">
                        <a href="#" className="fa fa-heart"></a>
                        <a href="#" className="fa fa-share"></a>
                        <a href="#" className="fa fa-eye"></a>
                    </div>
                    <div className="content">
                        <img src={phone} alt="" />
                        <h3>Mobile</h3>
                        <div className="price">$200 <span>$150</span></div>
                        <button type="button" className='btn'>Add to cart</button>
                    </div>
                </div>
                <div className="box">
                    <div className="icons">
                        <a href="#" className="fa fa-heart"></a>
                        <a href="#" className="fa fa-share"></a>
                        <a href="#" className="fa fa-eye"></a>
                    </div>
                    <div className="content">
                        <img src={headphone} alt="" />
                        <h3>Headphone</h3>
                        <div className="price">$200 <span>$150</span></div>
                        <button type="button" className='btn'>Add to cart</button>
                    </div>
                </div>
                
            </div>
        </section>
    </div>
  )
}

export default Product