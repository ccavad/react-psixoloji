import React from 'react'
import {Link} from "react-router-dom"

function BreadCrumb({page, url}) {
  return (
    <div className="breadcrumb">
      <h3>{page}</h3>
      <div className="breadcrumb-link">
        <Link to="/">Ana səhifə</Link>
        <span>{">"}</span>
        <Link to={`/${url}`}>{page}</Link>
      </div>
    </div>
  )
}

export default BreadCrumb