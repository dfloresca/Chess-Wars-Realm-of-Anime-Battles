'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../Navigation.module.css';
import { useContext } from 'react';
import { CartContext } from '../store/cartContext';

export default function Navigation() {
const cartCtx = useContext(CartContext);

const totalCartItems = cartCtx.items.reduce((total, item) => total + item.quantity, 0);


    return (

        <>
            <nav className={styles.navbar}>

                <div className={styles.navbarContainer}>
                    <input type="checkbox" name="" id="" />
                    <div className={styles.hamburgerLines}>
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                    </div>
                    <ul className={styles.menuItems}>
                        <li className={styles.menuLinks}><Link href="/">Home</Link></li>
                        <li className={styles.menuLinks}><Link href="/about">About</Link></li>
                        <li className={styles.menuLinks}><Link href="/contact">Contact</Link></li>
                        <li className={styles.menuLinks}><Link href="/users/profile">Profile</Link></li>

                    </ul>
                </div>
                <Link href="/"><Image className={styles.logo} src='/navLogo.png' width="300" height="74" alt="Floresca Threads" priority={true} /></Link>
                <Link href="/"><Image className={styles.logoSmall} src='/navLogoInitials.png' width="65" height="45" alt="Floresca Threads" priority={true} /></Link>
                <div className={styles.navbarContainer2}>
                    <ul className={styles.menuItems2}>
                        <li className={styles.menuLinks}><Link href='/cart'>Cart</Link></li>
                        <li className={`${styles.menuLinks} ${styles.cartLink}`}> {totalCartItems} </li>
                        <li className={styles.menuLinks}><Link href="/users/login">Login</Link></li>

                    </ul>

                </div>

            </nav>

        </>

    );
}