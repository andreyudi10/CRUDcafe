import React from 'react'
import NavbarMurni from './NavbarMurni'
import styles from './TransaksiGudang.module.css'

const TransaksiGudang = () => {
    return (
        <div>
            <NavbarMurni />
            <div className={styles.container}>
                Transaksi Gudang
            </div>
            
        </div>
    )
}

export default TransaksiGudang
