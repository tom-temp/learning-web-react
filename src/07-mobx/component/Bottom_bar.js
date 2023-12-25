import React from 'react'
import { NavLink  } from 'react-router-dom/cjs/react-router-dom.min'
import style from './Bottom_bar.module.css'

export default function BottomBar() {
  return (
    <div className={style.navbar}>

        <span>
        <NavLink activeClassName={style.nav_active} to="/films">Movies</NavLink>
        </span><span>
        <NavLink activeClassName={style.nav_active} to="/theater">Theater</NavLink>
        </span><span>
        <NavLink activeClassName={style.nav_active} to="/setting">Setting</NavLink>
        </span>

    </div>
  )
}
