import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

function EmployeeItem({ eitem, index, onChange }) {
  const { removeEmployee } = useContext(Context)
  const classes = []

  if (eitem.marked) {
    classes.push('marked')
  }

  return (
    <li className="list-item">
      <span className={classes.join(' ')}>
        <input className="list-checkbox" type='checkbox' checked={eitem.marked} onChange={() => onChange(eitem.id)}/>
        <strong>{eitem.first_name}&nbsp;{eitem.last_name}</strong>
      </span>

      <button className='remove' onClick={removeEmployee.bind(null, eitem.id)}>
        &times;
      </button>
    </li>
  )
}

EmployeeItem.propTypes = {
  eitem: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
}

export default EmployeeItem
