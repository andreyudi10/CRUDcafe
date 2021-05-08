import React from 'react'
import NavbarMurni from '../components/NavbarMurni.js'
import NavbarWeb from '../components/NavbarWeb.js'
import TransaksiCafe from '../components/TransaksiCafe'


const Home = () => {
    return (
        <div>
            {/* <NavbarWeb /> */}
            <NavbarMurni />
            <TransaksiCafe />
        </div>
    )
}

export default Home
