import React from 'react'
import { NavLink  } from 'react-router-dom/cjs/react-router-dom.min'

export default function BottomBar() {
  return (
    <div>
        <hr></hr>
        <li>
        <NavLink activeClassName="nav-active" to="/films">Movies</NavLink>
        </li><li>
        <NavLink activeClassName="nav-active" to="/theater">Theater</NavLink>
        </li><li>
        <NavLink activeClassName="nav-active" to="/setting">Setting</NavLink>
        </li>
        <hr></hr>
    </div>
  )
}
