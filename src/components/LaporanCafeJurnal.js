import React from 'react'
import NavbarMurni from './NavbarMurni'
import styles from './LaporanCafeJurnal.module.css'

const LaporanCafeJurnal = () => {
    return (
        <div>
            <NavbarMurni />
            <div className={styles.container}>
                Laporan Cafe Jurnal
            </div>
        </div>
    )
}

export default LaporanCafeJurnal
