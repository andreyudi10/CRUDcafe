import React from 'react'
import NavbarMurni from './NavbarMurni'
import styles from './VoucherCafe.module.css'

const VoucherCafe = () => {
    return (
        <div>
            <NavbarMurni />
            <div className={styles.container}>
                Voucher Cafe
            </div>            
        </div>
    )
}

export default VoucherCafe
