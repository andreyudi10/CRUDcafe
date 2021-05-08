import React from 'react'
import styles from './NavbarMurni.module.css'
import { NavLink } from 'react-router-dom'

const NavbarMurni = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <NavLink to="/components" className={styles.nounderline}>
                    <div className={styles.linkBox}>                        
                        Laporan Cafe Jurnal                 
                    </div>
                </NavLink>
                <NavLink to="/components" className={styles.nounderline}>
                    <div className={styles.linkBox}>
                        Transaksi Cafe
                    </div>
                </NavLink>
                <NavLink to="/components" className={styles.nounderline}>
                    <div className={styles.linkBox}>
                        Voucher Cafe
                    </div>
                </NavLink>
                <NavLink to="/components" className={styles.nounderline}>
                    <div className={styles.linkBox}>
                        Transaksi Gudang
                    </div>
                </NavLink>

            </div>

            
        </div>
    )
}

export default NavbarMurni
