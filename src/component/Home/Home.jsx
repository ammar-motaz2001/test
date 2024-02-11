import React from 'react'
import imgOne from '../../assets/imgs/avataaars.svg'
import style from './Home.module.css'

export default function Home() {
  return (
   <>
    <div className={`${style.ground} contain d-flex flex-column justify-content-center align-items-center`}>
        <div className="img">
        <img src={imgOne} className='w-100' alt="" />
        </div>
        <div className="header">
            <h1 className='pt-3'>START FRAMEWORK</h1>
        </div>
        <div className={`${style.line} w-25 h-25  text-white fw-bold text-center position-relative`}>
          <span className={style.lineBefore}></span>
          <i className="fa-solid fa-star"></i>
          <span className={style.lineAfter}></span>
        </div>
        <div className="div">
            <p className='pt-3'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
       
    </div>
 
   </>
  )
}
