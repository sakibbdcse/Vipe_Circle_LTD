import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Root/footer/Footer'
import Menu from './../components/Root/menu/Menu';
const RootLayout = () => {
    return (
        <>
            <Menu />
            <Outlet />
            <Footer />
        </>
    )
}
export default RootLayout