import React from 'react'
import { Outlet } from 'react-router-dom'
const Root = () => {
  return (
    <div>
        <h1>this is a mota</h1>
        <Outlet/>
        <h2>this is a mota</h2>
    </div>
  )
}

export default Root