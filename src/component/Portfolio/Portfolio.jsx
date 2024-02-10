import React from 'react'
import style from './Portfolio.module.css'
import imgOne from '../../assets/imgs/poert1 (1).png'
import imgTwo from '../../assets/imgs/port2 (1).png'
import imgThree from '../../assets/imgs/port3 (1).png'
import Footer from '../Footer/Footer'
export default function Portfolio() {
  
  return (
    <>
      <div className="div text-center mt-4   d-flex flex-column justify-content-center">
        <div className="di">
        <h1 className={`${style.line}`}>PORTFOLIO COMPONENT</h1>
        </div>
        <div className={`${style.line} w-25 h-25   fw-bold  position-relative m-auto`}>
          <span className={`${style.lineBefore} ${style.line}`}></span>
          <i className="fa-solid fa-star"></i>
          <span className={style.lineAfter}></span>
        </div>
      </div>


     <div className="container mb-3">
      <div className="row">
        <div className="col-4 mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal" >
          <div className="img position-relative">
            <img src={imgOne} className='w-100 rounded-3' alt="" />
            <div className={`${style.div} position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center`}>
            <i class={` fa-solid fa-plus fs-1 text-white`}></i>
            </div>
          </div>
        </div>
        <div className="col-4 mb-4 mt-3" data-bs-toggle="modal" data-bs-target="#exampleModalOne">
          <div className="img position-relative">
            <img src={imgTwo} className='w-100 rounded-3' alt="" />
            <div className={`${style.div} position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center`}>
            <i class={` fa-solid fa-plus fs-1 text-white`}></i>
            </div>
          </div>
        </div>
        <div className="col-4 mt-3" data-bs-toggle="modal" data-bs-target="#exampleModalTwo">
          <div className="img position-relative">
            <img src={imgThree} className='w-100 rounded-3' alt="" />
            <div className={`${style.div} position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center`}>
            <i class={` fa-solid fa-plus fs-1 text-white`}></i>
            </div>
          </div>
        </div>
        <div className="col-4 mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <div className="img position-relative">
            <img src={imgOne} className='w-100 rounded-3' alt="" />
            <div className={`${style.div} position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center`}>
            <i class={` fa-solid fa-plus fs-1 text-white`}></i>
            </div>
          </div>
        </div>
        <div className="col-4 mt-3" data-bs-toggle="modal" data-bs-target="#exampleModalOne" >
          <div className="img position-relative">
            <img src={imgTwo} className='w-100 rounded-3' alt="" />
            <div className={`${style.div} position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center`}>
            <i class={` fa-solid fa-plus fs-1 text-white`}></i>
            </div>
          </div>
        </div>
        <div className="col-4 mt-3" data-bs-toggle="modal" data-bs-target="#exampleModalTwo">
          <div className="img position-relative">
            <img src={imgThree} className='w-100 rounded-3' alt="" />
            <div className={`${style.div} position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center`}>
            <i class={` fa-solid fa-plus fs-1 text-white`}></i>
            </div>
          </div>
        </div>
      </div>
     </div>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div className="row">
      <div className="col-12 d-flex justify-content-center align-items-center">
        <img src={imgOne} className='img-fluid rounded-3' alt="" />
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalOne" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div className="row">
      <div className="col-12 d-flex justify-content-center align-items-center">
        <img src={imgTwo} className='img-fluid' alt="" />
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalTwo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div className="row">
      <div className="col-12 d-flex justify-content-center align-items-center">
        <img src={imgThree} className='img-fluid' alt="" />
      </div>
    </div>
  </div>
</div>
<Footer/>
    </>
  )
}
