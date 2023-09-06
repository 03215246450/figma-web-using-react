import React from 'react'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining'; 


export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><DeliveryDiningIcon/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse m-auto navbar-collapse" id="navbarSupportedContent">
 <form class="d-flex text-center align-items-center" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
      </form>
    </div>
  </div>
</nav>
    </>
  )
}
