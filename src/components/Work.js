import React from 'react'
import {Link} from 'react-router'

export const Task = props => {
  return (
   <p>a task</p>
  )
}

const Work = props => {
  return (
      <div>
    <p>Wow!! Such a great work here!
    <Link to="/work/task">See a task here</Link>
    </p>
    {props.children}
    </div>
  )
}
export default Work
