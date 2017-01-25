import React from 'react'
import { Field, reduxForm } from 'redux-form'

const validate = values => {
  const errors = {}

  if ( ! values.description) errors.description = "Required"
  else if (values.description.length < 10) errors.description = "Short"

  if ( ! values.price) errors.price = "Required"
  else if (isNaN(Number(values.price))) errors.price = "NotNumber"
  else if (values.price < 0) errors.price = "UnacceptableNumber"

  if ( ! values.cost) errors.cost = "Required"

  if (isNaN(Number(values.cost))) errors.coste = "NotNumber"
  else if (values.cost <= 0) errors.cost = "UnacceptableNumber"

  if (values.price < values.cost) {
    errors.price = "LessThan"
    errors.cost = "TooMuch"
  }

  return errors
}

const inputWithError = ({ input, label, type, meta: { touched, error, warning } }) => (
<div>
  <label>{label}</label>
  <div>
    <input {...input} placeholder={label} type={type} />
    {touched && (error && <span>{error}</span>)}
  </div>
</div>
)

const Add = props => {

  const { handleSubmit, pristine, reset, submitting } = props

  return (
   <form onSubmit={handleSubmit}>
      <Field type="text" name="description" component={inputWithError} label="introdu descrierea lucrarii" />
      <Field type="number" name="price" component={inputWithError} step="1" min="0" label="introdu pretul" />
      <Field type="number" name="cost" component={inputWithError} step="1" min="0" label="introdu costul" />
    <button type="submit" disabled={pristine || submitting}>Ok</button>
    <button type="button" disabled={pristine || submitting} onClick={reset}>Clear</button>
   </form>
  )
}

const AddForm = reduxForm(
{
  form:'work.add',
  validate
})(Add)

export default AddForm
