import React from 'react'
import PropTypes from 'prop-types'
import EmployeeItem from './EmployeeItem'

function EmployeeList(props) {

  function submitHandler(e) {
    e.preventDefault();
  }

  return (
    <form className="employees-list-form" name="employeesListForm" action="" method="post" onSubmit={ submitHandler }>
      <fieldset className="employees-list-form--fieldset">
        <legend className="employees-list-form--legend">
          Employees list
        </legend>
        <ul className="list">
          {props.eitems.map((eitem, index) => {
            return (
              <EmployeeItem eitem={eitem} key={eitem.id} index={index} onChange={props.onToggle}/>
            )
          })}
        </ul>
      </fieldset>
      <fieldset className="employees-list-form-bottom--fieldset">
        <button className="employee-list-form--button" type='submit' disabled>Remove marked</button>
      </fieldset>
    </form>
  )
}

EmployeeList.propTypes = {
  eitems: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default EmployeeList
