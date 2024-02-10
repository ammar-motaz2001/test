import { Link, NavLink } from 'react-router-dom'
import style from "../Navbar/Navbar.module.css"
export default function Navbar() {

  return (
    <>
  <nav className={`${style.navbarColor} navbar navbar-expand-lg p-4`}>
  <div className="container">
    <Link className={`${style.navbarBrand} navbar-brand text-white `} to="/">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       
        <li className="nav-item">
         <NavLink to="/ABOUT" className={`${style.navLinks }  ${ ({ isActive }) => (isActive ? 'active' : '')} p-2 text-white text-decoration-none fw-bold rounded`}>ABOUT</NavLink>
        </li>

        <li className="nav-item">
        <NavLink to="/PORTFOLIO" className={`${style.navLinks }  ${ ({ isActive }) => (isActive ? 'active' : '')} p-2 text-white text-decoration-none fw-bold rounded`}>PORTFOLIO</NavLink>
        </li>

        <li className="nav-item " >
       <NavLink to="/CONTACT" className={`${style.navLinks }  ${ ({ isActive }) => (isActive ? 'active' : '')} p-2 text-white text-decoration-none fw-bold rounded`}>Contact</NavLink>
        </li>
       
       
      </ul>
     
    </div>
  </div>
</nav>


    </>
  )
}
