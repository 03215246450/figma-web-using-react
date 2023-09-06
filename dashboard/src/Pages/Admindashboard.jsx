import React from 'react'
import Dropdown from '../components/Dropdown'
import Header from '../components/Header'



export default function Admindashboard() {
  return (
    <div>
      <Header/>
      <br />
      <h3 className='mx-3'>File results for #admin</h3>
      <br />
      <Dropdown/>
    </div>
  )
}