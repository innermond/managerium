import React from 'react'

import NavLink from './NavLink'
import '../style.css'

const Layout = props => {
  return (
    <div>
      <h1>Managerium</h1>
      <NavLink to="/work">Work</NavLink>
      {' | '}
      <NavLink to="/home">Home</NavLink>
      {props.children}
    </div>
  )
}

export default Layout
