import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from "../contact/contact.module.css";

export default function ContactUs() { 
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_txbbnd7', 'template_iaa73cr', form.current, 'GiVlBArhfBK1sPlxt')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className={styles.formDiv}>
            <h1 className={styles.messageUs}>Send us a Message</h1>
            <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
                    <label htmlFor="user_name">Full Name</label>
                    <input placeholder="Please enter Full Name" name="user_name" type="text" id="user_name" />
                    <label htmlFor="user_email">Email Address</label>
                    <input placeholder="Please enter Email Address" name="user_email" type="email" id="user_email" />
                <label htmlFor="message">Message</label>
                <textarea name="message" type="text" id="message" rows={5} />
                <div className={styles.buttons}>
                    <button type="submit" >Send</button>
                    <button type='reset' >Clear</button>
                </div>
            </form>
        </div>
    );
};