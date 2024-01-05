import styles from "../contact/contact.module.css"
export default function ContactUs() {
    return (
        <div className={styles.formDiv}>
            <h1 className={styles.messageUs}>Send us a Message</h1>
            <form className={styles.contactForm}>
                <div className={styles.fullName}>
                    <label htmlFor="firstName">First Name</label>
                    <input name="firstName" type="text" id="firstName" />
                    <label htmlFor="lastName">Last Name</label>
                    <input name="lastName" type="text" id="lastName" />
                </div>
                <label htmlFor="emailAddress">Email Address</label>
                <input name="emailAddress" type="text" id="emailAddress" />
                <label htmlFor="message">Message</label>
                <textarea name="message" type="text" id="message" rows={5} />
                <div className={styles.buttons}>
                    <button type="submit" >Send</button>
                    <button type='reset' >Clear</button>
                </div>
            </form>
        </div>
    )
}