import styles from "./contact.module.css"

export default function ContactUs() {
    return (
        <div className={styles.formDiv}>
            <h1 className={styles.messageUs}>Send us a Message</h1>
            <form className={styles.contactForm}>
                <div className={styles.fullName}>
                    <label for="firstName">First Name</label>
                    <input name="firstName" type="text" id="firstName" />
                    <label for="lastName">Last Name</label>
                    <input name="lastName" type="text" id="lastName" />
                </div>
                <label for="emailAddress">Email Address</label>
                <input name="emailAddress" type="text" id="emailAddress" />
                <label for="message">Message</label>
                <textarea name="message" type="text" id="message" rows={5} />
                <div className={styles.buttons}>
                    <button type="submit" >Send</button>
                    <button type='reset' >Clear</button>
                </div>
            </form>
        </div>
    )
}