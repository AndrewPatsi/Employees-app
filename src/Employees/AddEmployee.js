import React from 'react'
import PropTypes from 'prop-types'

function AddEmployee({ onCreate }) {

  function submitHandler(e) {
    e.preventDefault()
    const data = {}
    const form = e.target
    const isCheckboxOrRadio = type => ['checkbox', 'radio'].includes(type)

    for (let field of form) {
      const {name} = field

      if (name) {
        const {type, checked, value} = field
        if (isCheckboxOrRadio(type) && !checked) {
          continue
        }
        data[name] = value
      }
    }

    if(data.firstname.trim() && data.lastname.trim()) {
      onCreate(data.firstname, data.lastname)
    }
  }

  return (
    <form className="employee-form" onSubmit={ submitHandler }>
      <input className="employee-form--input" name="firstname" type="text" placeholder="Name" required/>
      <input className="employee-form--input" name="lastname" type="text" placeholder="Lastname" required/>
      <button className="employee-form--button" type='submit'>Add Employee</button>
    </form>
  )
}

AddEmployee.propTypes = {
  onCreate: PropTypes.func.isRequired
}

export default AddEmployee
