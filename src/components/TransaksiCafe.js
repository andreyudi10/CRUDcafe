import React,{ useState } from 'react'
import { Button } from 'reactstrap'
import styles from './TransaksiCafe.module.css'

const TransaksiCafe = () => {
    const [ menu, setMenu] =useState([
        {
            namaMakanan:'Burger Original',
            harga:2000,                        
        },
        {
            namaMakanan:'Burger Original',
            harga:2000,                        
        },
        {
            namaMakanan:'Burger Original',
            harga:2000,                        
        },
        {
            namaMakanan:'Burger Original',
            harga:2000,                        
        },
    ])

    const [ operator, setOperator] = useState(["enggol","ali","bagas","tomo"])
    const menuBody = (
        <>
            <div className={styles.title}>
                Menu
            </div>
            <div className={styles.containMenu}>                
                {menu.map(menu=>(
                    <>
                        <button className={styles.center}>
                            <b>{menu.namaMakanan}</b>
                            <p>{menu.harga}</p>
                        </button>
                    </>
                ))}
            </div>
            
        </>
    )
    const formtambahBody = (
        <>
            <div className={styles.title}>
                Form Tambah
            </div>
            <div className={styles.content}>
                <div className={styles.wrapper}>
                    <div className={styles.item}>Tgl Transaksi :</div>
                    <input type="date"></input>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.item}>Nama Customer :</div>                    
                    <input type="text"></input>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.item}>Email :</div>
                    <input type="string" ></input>                    
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.item}>No Wa :</div>
                    <input type="number"></input>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.item}>Operator :</div>
                    {operator.map(op=>(
                        <button>{op}</button>
                    ))}
                </div>
            </div>
        </>
    )

    return (
        <div className={styles.container}>            
            <div>Transaksi Cafe</div>
            <div className={styles.splitbox}>
                <div className={styles.box}>
                    {formtambahBody}
                    {menuBody}
                </div>
                <div className={styles.box}>
                    {formtambahBody}
                </div>
            </div>       
        </div>
    )
}

export default TransaksiCafe