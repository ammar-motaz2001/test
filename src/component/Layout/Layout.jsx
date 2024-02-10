import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

// function Root() {
//   return (
//     <div className="App">
//       <nav>
//         <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
//         <NavLink to="/CONTACT" className={({ isActive }) => (isActive ? 'active' : '')}>Blog</NavLink>
//         <NavLink to="/ABOUT" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
//         <NavLink to="/PORTFOLIO" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
//       </nav>
//       <main>
//         <Outlet />
//       </main>
//     </div>
//   );
// }

// export default Root;



export default function Layout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

