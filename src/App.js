import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EmployeeList from './Employees/EmployeeList'
import Context from './context'
import AddEmployee from './Employees/AddEmployee'
import Loader from './Loader'

function App() {
  const [eitems, setEmployee] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    fetch('https://reqres.in/api/users?per_page=12')
      .then(response => response.json())
      .then(eitems => {
        setEmployee(eitems.data)
        setLoading(false)
      })
  }, [])

  function toggleEmployee(id) {
    setEmployee(
      eitems.map(eitem => {
        if (eitem.id === id) {
          eitem.marked = !eitem.marked
        }
        return eitem
      })
    )
  }

  function removeEmployee(id) {
    setEmployee(eitems.filter(eitem => eitem.id !== id))
  }

  function addEmployee(first_name, last_name) {

    setEmployee(
      eitems.concat([
        {
          id: Date.now(),
          email: "",
          first_name,
          last_name,
          avatar: "",
          marked: false
        }
      ])
    )
  }

  return (
    <Router>
      <div className="wrapper">
        <nav className="top-nav">
          <ul className="top-nav-list">
            <li className="top-nav-item">
              <Link className="top-nav-link" to="/">Home</Link>
            </li>
            <li className="top-nav-item">
              <Link className="top-nav-link" to="/employees">Employees</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/employees">
            <Context.Provider value={{ removeEmployee }}>
              <div className="wrapper">
                <h1>Employees page</h1>

                <React.Suspense fallback={<Loader />}>
                  <AddEmployee onCreate={addEmployee} />
                </React.Suspense>

                {loading && <Loader />}
                {eitems.length ? (
                  <EmployeeList eitems={eitems} onToggle={toggleEmployee} />
                ) : loading ? null : (
                  <p>No employees!</p>
                )}
              </div>
            </Context.Provider>
          </Route>
          <Route path="/">
            <div className="wrapper">
              <h1>
                Main page
              </h1>
              <p>Something important will happen here...</p>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
