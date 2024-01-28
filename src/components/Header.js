import React from 'react'
import "../CSS Styles/Header.css"

const Header = () => {
    return (
<div>

<header>
    <input type='checkbox'id='check'name=''/>
    <label htmlFor ="check" id='menu-bar'><i className='fa fa-bars'></i></label>
   {/* <div id="menu-bar" className="fa fa-bars"></div>*/}
    <a href="#" className="logo">Logo</a>
   {/*<form>
        <div className="icons">
            <input className="search" type="text" placeholder="Search" />
            <a href='#'><i className="fa-solid fa-magnifying-glass" ></i></a>
        </div>
    </form>*/}
    <nav className="navbar">
    <input className="search" type="text" placeholder="Search"  />
            <a href='#'id='searchbtn'><i className="fa-solid fa-magnifying-glass" ></i></a>

        <a href="#">Home</a>
        <a href="#">categories</a>
        <a href="#blog">blog</a>
        <a href="#news">news</a>    
    </nav>
    <div className="icons">
        <a href="#"><i className="fa fa-heart"></i></a>
        <a href="#"><i className="fa fa-shopping-cart"></i></a>
        <a href="#"><i className="fa fa-user"></i></a>
    </div>
</header>
</div>


    )
}

export default Header


