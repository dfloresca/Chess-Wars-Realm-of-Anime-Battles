import Link from 'next/link';
import Image from 'next/image';
import styles from './Navigation.module.css';
export default function Navigation() {

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
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/about">About Us</a></li>

                    </ul>
                </div>
                <Link href="/"><Image className={styles.logo} src="/FTlogoText.png" /></Link>
                <div className={styles.navbarContainer2}>
                    <ul className={styles.menuItems2}>
                        <li className={styles.svgLinks}><Link href='/cart'>
                            Cart
                        </Link>
                        <span> 0 </span>
                        </li>
                        <li className={styles.svgLinks}>
                            <Link href='/contact'>Contact</Link>
                        </li>
                        <li className={styles.svgLinks}>Profile</li>
                        <li className={styles.logLinks}>Login</li>

                    </ul>

                </div>

            </nav>

        </>

    );
}