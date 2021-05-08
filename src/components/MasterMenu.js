import React from 'react'
import NavbarMurni from './NavbarMurni'
import styles from './MasterMenu.module.css'

const MasterMenu = () => {
    return (
        <div>
            <NavbarMurni />
            <div className={styles.container}>Master Menu</div>
            
        </div>
    )
}

export default MasterMenu
