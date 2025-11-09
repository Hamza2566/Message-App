import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar';
import { Outlet } from 'react-router';

function Layout() {  
  return (
    <>

      <Navbar/ >
      <Outlet />
    </>
  )
}

export default Layout
