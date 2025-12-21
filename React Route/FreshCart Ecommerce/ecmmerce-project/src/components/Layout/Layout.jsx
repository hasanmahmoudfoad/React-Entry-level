import React from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
export default function Layout({userData, userToken}) {
  return <>
  <Navbar userToken={userToken} userData={userData}/>
     <main className='container py-5'>
        <Outlet></Outlet>
      </main>
  <Footer/> 
  </>
   
  
}
