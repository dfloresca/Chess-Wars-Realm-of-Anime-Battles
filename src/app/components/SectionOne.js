import styles from "./SectionOne.module.css";
import Link from "next/link";


export default function SectionOne() {
    return (
        <div className={styles.heroImg}>
            <div className={styles.heroContent}>
                <p>Want Custom Garments?</p>
                <Link href="/contact"><button>Contact Us</button></Link>
            </div>
        </div>
    )
}