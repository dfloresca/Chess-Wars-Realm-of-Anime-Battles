import Image from "next/image"
import styles from "../contact/contact.module.css";

export default function TechSupport() {
    return (
        <div className={styles.techSupport}>
            <Image className={styles.ctoPhoto} src="/Daniel.png" width="75" height="75" />
            <div className={styles.bio}>
                <h1>Daniel Floresca CTO</h1>
                <p>Daniel has been with Floresca Threads since the beginning. He has a genuine passion for helping resolve anything that might come up and welcomes all suggestions</p>
            </div>
        </div>
    )
}