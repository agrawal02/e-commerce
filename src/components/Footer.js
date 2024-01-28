import React from 'react'
import "../CSS Styles/Footer.css"

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="row primary">
                    <div className="column about">

                        <h3>Ecommerce</h3>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                            voluptatem corporis error non,
                        </p>

                        <div className="social">
                           
                            <a href='#'> <i className="fa-brands fa-twitter pe-1"></i></a>
                            <a href='#'><i className="fa-brands fa-facebook pe-1"></i></a>
                            <a href='#'><i className="fa-brands fa-instagram pe-1"></i></a>
                            
                        </div>
                    </div>

                    <div className="column links">
                        <h3>Get to know us</h3>
                        <ul>
                            <li>
                                <a href="#">career</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="column links">
                        <h3>Payment method</h3>
                        <ul>
                            <li>
                                <a href="#"></a>
                            </li>
                            <li>
                                <a href="#">Shop with points</a>
                            </li>
                            <li>
                                <a href="#">card</a>
                            </li>
                            <li>
                                <a href="#">cash on delivery</a>
                            </li>
                        </ul>
                    </div>
                    <div className="column links">
                        <h3>Let us help you</h3>
                        <ul>
                            <li>
                                <a href="#faq">contact</a>
                            </li>
                            <li>
                                <a href="#">Track packages</a>
                            </li>
                            <li>
                                <a href="#">cancel orders</a>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className="row copyright">
                    <p>Copyright &copy; 2023</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer