/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter,Routes, Route, } from 'react-router-dom';
import Home from '../pages/Home';
import AdminPanel from '../pages/AdminPage/AdminPanel';
function Router() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='adminpanel' element={<AdminPanel/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router