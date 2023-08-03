import React from 'react'
import {Link, useRouteError } from 'react-router-dom'

const Error = () => {
  const error=useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Error Page</h1>
      <h3>{error.status}</h3>
      <h3>{error.statusText}</h3>
      <h3>{error.data}</h3>
      <Link to='/'>Home</Link>
    </div>
  )
}

export default Error