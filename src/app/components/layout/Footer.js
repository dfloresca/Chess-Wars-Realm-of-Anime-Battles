import Link from "next/link";
import styles from './Footer.module.css';
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
    return (
        <div className={styles.footerWrapper}>
            <Link href="/"><img className={styles.logo} src="/FTlogoText.png" /></Link>
            <div className={styles.socials}>
                <span><FaTwitter /></span>
                <span> <FaFacebook /></span>
            </div>
            <p>copyright Floresca Threads 2024</p>

        </div>


    )

}