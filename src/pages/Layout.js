import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout() {
    return (
        <>
            
            <a href="#0" className="scrollToTop">
                <i className="fas fa-angle-up" />
            </a>
           
           <Header />

            <Outlet />

            <Footer />
        </>
    )
}
