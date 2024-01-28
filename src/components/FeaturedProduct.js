import React from 'react'
import "../CSS Styles/FeaturedProduct.css"
import Product6 from '../Images/product_img6.jpg'
import watch from "../Images/watch.png"
import phone from "../Images/phone.png"
import headphone from "../Images/headphone.png"

const FeaturedProduct = () => {
    return (
        <div>
            <section className="featured" id="fearured">
                <h1 className="heading">Fearured <span>Product</span></h1>
                <div className="box-container">
                    <div className="box">
                        <div className="content">
                            <img src={Product6} alt="" />
                            <h3>Mens Shirt</h3>
                            <div className="price">$200</div>
                            <div className="stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <button type="button" className='btn'>Add to cart</button>
                        </div>
                    </div>
                    <div className="box">
                        <div className="content">
                            <img src={phone} alt="" />
                            <h3>Phone</h3>
                            <div className="price">$200 </div>
                            <div className="stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <button type="button" className='btn'>Add to cart</button>
                        </div>
                    </div>

                    <div className="box">
                        <div className="content">
                            <img src={headphone} alt="" />
                            <h3>Headphone</h3>
                            <div className="price">$200 </div>
                            <div className="stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <button type="button" className='btn'>Add to cart</button>
                        </div>
                    </div>
                    <div className="box">
                        <div className="content">
                            <img src={watch} alt="" />
                            <h3>Watch</h3>
                            <div className="price">$200 </div>
                            <div className="stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <button type="button" className='btn'>Add to cart</button>
                        </div>
                    </div>
                    <div className="box">
                        <div className="content">
                            <img src={Product6} alt="" />
                            <h3>Nike Shoes</h3>
                            <div className="price">$200</div>
                            <div className="stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <button type="button" className='btn'>Add to cart</button>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default FeaturedProduct