import React from 'react'
import {Link} from 'react-router'

const Layout = props => {
  return (
    <div>
      <h1>Managerium</h1>
      <Link to="/work">Work</Link>
      {' | '}
      <Link to="/home">Home</Link>
      {props.children}
    </div>
  )
}

export default Layout
