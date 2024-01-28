import React from 'react'
import "../CSS Styles/NewsLetter.css"

const NewsLetter = () => {
  return (
    <div>
        <section className="news" id="news">
            <div className="content">
                <h3>news letter</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Fuga sed itaque ducimus maxime facere nihil expedita non sunt? Nostrum, voluptatem?
                </p>
                <form action="">
                    <input type="email" placeholder="Please enter your email" className="email"/>
                    <input type="submit" value="save" className="btn"/>
                </form>
            </div>
        </section>
    </div>
  )
}

export default NewsLetter