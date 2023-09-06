import React from 'react'
import { Link } from 'react-router-dom'

export default function Dropdown() {
  return (
    <>
      <div className="dropdown">
  <button className="btn btn-disabled dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   All products
  </button>
  <ul class="dropdown-menu">
    <li><Link className="dropdown-item" to="/">Action</Link></li>
    <li><Link className="dropdown-item" to="/">Another action</Link></li>
    <li><Link className="dropdown-item" to="/">Something else here</Link></li>
  </ul>
</div>    </>
  )
}
