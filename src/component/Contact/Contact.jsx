import React, { useState } from 'react'
import style from './Contact.module.css'
import Footer from '../Footer/Footer'
export default function Contact() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userAge, setUserAge] = useState('');

  const mystyleOne = {
    color: userName ? 'green' : 'white',
    textAlign: 'center',
    padding: '5px'
  };

  const mystyleTwo = {
    color: userEmail ? 'green' : 'white',
    textAlign: 'center',
    padding: '5px'
  };

  const mystyleThree = {
    color: userPassword ? 'green' : 'white',
    textAlign: 'center',
    padding: '5px'
  };

  const mystyleFour = {
    color: userAge ? 'green' : 'white',
    textAlign: 'center',
    padding: '5px'
  };

  const handleInputChangeName = (event) => {
    setUserName(event.target.value);
  };

  const handleInputChangeEmail = (event) => {
    setUserEmail(event.target.value);
  };

  const handleInputChangePassword = (event) => {
    setUserPassword(event.target.value);
  };

  const handleInputChangeAge = (event) => {
    setUserAge(event.target.value);
  };
  return (
    <>
       <div className="div text-center pt-4   d-flex flex-column justify-content-center">
        <div className="di ">
        <h1 className={`${style.line}`}>CONATCT SECTION</h1>
        </div>
        <div className={`${style.line} w-25 h-25   fw-bold  position-relative m-auto`}>
          <span className={`${style.lineBefore} ${style.line}`}></span>
          <i className="fa-solid fa-star"></i>
          <span className={style.lineAfter}></span>
        </div>
      </div>

      <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="form-group">
            <p style={mystyleOne}>User Name:</p>
            <input type="text" className='form-control w-50 m-auto mt-1' placeholder='User Name:' onInput={handleInputChangeName} />
          </div>
          <div className="form-group">
            <p style={mystyleTwo}>User Email:</p>
            <input type="text" className='form-control w-50 m-auto mt-1' placeholder='User Email:' onInput={handleInputChangeEmail} />
          </div>
          <div className="form-group">
            <p style={mystyleThree} >User Password:</p>
            <input type="password" className='form-control w-50 m-auto mt-1' placeholder='User Password:' onInput={handleInputChangePassword} />
          </div>
          <div className="form-group">
            <p style={mystyleFour}>User Age:</p>
            <input type="text" className='form-control w-50 m-auto mt-1' placeholder='User Age:' onInput={handleInputChangeAge} />
          </div>
          <div className="form-group text-center mt-3">
            <button className="btn btn-success mb-4 px-3">Send Message</button>
          </div>
        </div>
      </div>
    </div>
   <Footer/>
    </>
  )
}
