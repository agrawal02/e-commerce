import React from 'react'
import "../CSS Styles/Slider.css"
import banner1 from "../Images/banner1.jpg"

const Slider = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${banner1})` }} className="jumbotron img-jumbotron">
                <button className="btn btn-primary" >Shop Now</button>
            </div>
        </div>




    )
}

export default Slider