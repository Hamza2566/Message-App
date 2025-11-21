import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import style from "./DashboardLayout.module.css"

export default function DashboardLayout() {
  return (
    <div className={style.DashboardWrapper}>
    <div className={style.Navbardiv}>
      {/* the navbar */}
       <Navbar/>

    </div>
    <div className={style.Messagediv}>

      {/* Sidebar */}
      <div className={style.UserSidebar}>
        <h3>Friends List</h3>
        <ul>
          <li>Friend 1</li>
          <li>Friend 2</li>
        </ul>
      </div>

      {/* Main content */}
      <div className={style.Chatwindow}>
        <Outlet /> {/* DashboardHome or ChatWindow */}
      </div>
    </div>
    </div>
  );
}
