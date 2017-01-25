import React from 'react'
import NavLink from '../NavLink'

const Work = props => {
  return (
      <div>
    <p>Wow!! Such a great work here!
    <NavLink to="/work/add">Add</NavLink>
    </p>
    {props.children}
    </div>
  )
}
export default Work
