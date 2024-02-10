import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <div className={`${style.container} container-fluid text-white`}>
        <div className="row">
            <div className="col-md-4 mt-5 mb-5">
                <div className="div-1 text-center">
                    <h4>LOCATION</h4>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
            </div>
            <div className="col-md-4 mt-5 mb-5">
                <div className="div-1 text-center">
                    <h4>AROUND THE WEB</h4>
                    <i className={`${style.div1} fa-brands fa-facebook-f me-4`}></i>
                    <i className={`${style.div1} fa-brands fa-twitter me-4`}></i>
                    <i className={`${style.div1} fa-brands fa-linkedin-in me-4`}></i>
                    <i className={`${style.div1} fa-solid fa-globe me-4`}></i>
                </div>
            </div>
            <div className="col-md-4 mt-5 mb-5">
                <div className="div-1 text-center">
                    <h4>ABOUT FREELANCER</h4>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
            
        </div>
      </div>
      <p className={`${style.paragraph} text-center  pb-4 pt-3 text-white m-0`}>Copyright © Your Website 2021</p>
    </>
  )
}
