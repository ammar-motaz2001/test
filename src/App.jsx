import React from 'react'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Layout from './component/Layout/Layout'
import Home from './component/Home/Home'
import About from './component/About/About'
import Contact from './component/Contact/Contact'
import Portfolio from './component/Portfolio/Portfolio'
import "./App.css";

let routes=createBrowserRouter([
  {path:'/',element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'/ABOUT',element:<About/>},
    {path:'/CONTACT',element:<Contact/>},
    {path:'/PORTFOLIO',element:<Portfolio/>}

  ]}
])
export default function App() {
  return (
    <div>
      <RouterProvider router={routes}/>
    </div>
  )
}
