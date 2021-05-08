import React from 'react'
import styles from './NavbarMurni.module.css'
import { NavLink } from 'react-router-dom'

const NavbarMurni = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <NavLink to="/LaporanCafeJurnal" className={styles.nounderline}>
                    <div className={styles.linkBox}>                        
                        Laporan Cafe Jurnal                 
                    </div>
                </NavLink>
                <NavLink to="/" className={styles.nounderline}>
                    <div className={styles.linkBox}>
                        Transaksi Cafe
                    </div>
                </NavLink>
                <NavLink to="/VoucherCafe" className={styles.nounderline}>
                    <div className={styles.linkBox}>
                        Voucher Cafe
                    </div>
                </NavLink>
                <NavLink to="/TransaksiGudang" className={styles.nounderline}>
                    <div className={styles.linkBox}>
                        Transaksi Gudang
                    </div>
                </NavLink>
                <NavLink to="/MasterMenu" className={styles.nounderline}>
                    <div className={styles.linkBox}>
                        Master Menu
                    </div>
                </NavLink>

            </div>

            
        </div>
    )
}

export default NavbarMurni
