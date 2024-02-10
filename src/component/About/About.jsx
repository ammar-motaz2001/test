import React from 'react'
import style from './About.module.css'
import Footer from '../Footer/Footer'
export default function About() {
  return (
    <>
     <div className={`${style.container} container-fluid   `}>
     <div className="div text-center    d-flex flex-column justify-content-center">
        <div className="di ">
        <h1 className={`${style.line}`}>ABOUT COMPONENT</h1>
        </div>
        <div className={`${style.line} w-25 h-25   fw-bold  position-relative m-auto`}>
          <span className={`${style.lineBefore} ${style.line}`}></span>
          <i className="fa-solid fa-star"></i>
          <span className={style.lineAfter}></span>
        </div>
      </div>
      
      <div className="big d-flex text-center pt-5 pb-5">
        <div className="div me-5 ">
        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className="div">
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
      </div>
     </div>
     <Footer/>
    </>
  )
}
