import styles from "./SectionOne.module.css"


export default function SectionOne() {
    return (
        <div className={styles.heroImg}>
            <div className={styles.heroContent}>
                <p>Want Custom Garments?</p>
                <button>Contact Us</button>
            </div>
        </div>
    )
}