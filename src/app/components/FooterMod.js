import Link from "next/link";
import styles from './FooterMod.module.css';
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <div className={styles.footerWrapper}>
            <Link href="/"><img className={styles.logo} src="/navLogo.png" /></Link>
            <div className={styles.socials}>
                <span><FaInstagramSquare /></span>
                <span><a href="https://www.facebook.com/FlorescaThreads/" target="_blank"><FaFacebook /></a></span>
            </div>
            <p>&#169; Floresca Threads 2024</p>

        </div>


    )

}