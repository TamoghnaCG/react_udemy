import React from 'react'
import style from './PageNav.module.css'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'
export default function PageNav() {
  return (
      <nav className={style.nav}>
          <Logo/>
          <ul>
              <li>
                  <NavLink to ="/product" >Product </NavLink>
              </li>
              <li>
                  <NavLink to ="/price" >Price </NavLink>
              </li>
              <li>
                  <NavLink to ="/login" className={style.ctaLink}>LogIn</NavLink>
              </li>
              
          </ul>
    </nav>
  )
}
