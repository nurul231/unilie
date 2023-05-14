import React from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Root from '../layouts/root/Root'
import Login from '../pages/Login'
import Home from '../pages/Home'
import SignUp from '../pages/SignUp'
import RePropertys from '../pages/RePropertys'
import ArticalDetails from '../pages/ArticalDetails'
import ReadReview from '../pages/ReadReview'

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element= {<Root/>}>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/repropertys' element={<RePropertys/>}></Route>
        <Route path='/articaldetails' element={<ArticalDetails/>}></Route>
        <Route path='/readreview' element={<ReadReview/>}></Route>
    </Route>
))


const Routes = () => {
  return (
   <RouterProvider router={router}></RouterProvider>
  )
}

export default Routes