import React from 'react'

import AddForm from './AddForm'

const Submit = values => console.log(values)

const Add = props => {
  return <AddForm onSubmit={Submit} />
 }

export default Add
