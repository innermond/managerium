import React from 'react'
import {Link} from 'react-router'

const Work = props => {
  return (
      <div>
    <p>Wow!! Such a great work here!
    <Link to="/work/add">Add</Link>
    </p>
    {props.children}
    </div>
  )
}
export default Work
