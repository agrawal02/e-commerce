import React from 'react'
import "../CSS Styles/Blog.css"
import pick1 from "../Images/pic-1.png"
import pick2 from "../Images/pic-2.png"
import pick3 from "../Images/pic-3.png"

const Blog = () => {
  return (
    <div>
         <section className="blog" id="blog">
            <h1 className="heading">Blog</h1>
            <div className="box-container">
                <div className="box">
                    <img src={pick1} alt=""/>
                    <h3>Name</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Eos sequi temporibus impedit corporis vero ab exercitationem 
                        dolore voluptatibus, nisi non.
                    </p>
                    <div className="stars">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa fa-star"></i>
                    </div>
                    <button type="button" className='btn'>Read More</button>
                </div>
                <div className="box">
                    <img src={pick2}alt=""/>
                    <h3>Name</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Eos sequi temporibus impedit corporis vero ab exercitationem 
                        dolore voluptatibus, nisi non.
                    </p>
                    <div className="stars">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa fa-star-half-o"></i>
                    </div>
                    <button type="button" className='btn'>Read More</button>
                </div>
                <div className="box">
                    <img src={pick3} alt=""/>
                    <h3>Name</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Eos sequi temporibus impedit corporis vero ab exercitationem 
                        dolore voluptatibus, nisi non.
                    </p>
                    <div className="stars">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa fa-star-half-o"></i>
                    </div>
                    <button type="button" className='btn'>Read More</button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Blog