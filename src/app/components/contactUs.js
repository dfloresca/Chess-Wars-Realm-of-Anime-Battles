import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from "../contact/contact.module.css";
// const SERVICE_ID =  ;
// const TEMPLATE_ID = ;
// const PUBLIC_KEY= axios.get(process.env.NEXT_PUBLIC_SERVER_URL)

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
                {/* <div className={styles.fullName}> */}
                    <label htmlFor="user_name">Full Name</label>
                    <input placeholder="Please enter Full Name" name="user_name" type="text" id="user_name" />
                    <label htmlFor="user_email">Email Address</label>
                    <input placeholder="Please enter Email Address" name="user_email" type="email" id="user_email" />
                {/* </div> */}
                {/* <label htmlFor="subject">Subject</label>
                <input placeholder="Enter subject here..." name="subject" type="text" id="subject" /> */}
                <label htmlFor="message">Message</label>
                <textarea name="message" type="text" id="message" rows={5} />
                <div className={styles.buttons}>
                    <button type="submit" >Send</button>
                    <button type='reset' >Clear</button>
                </div>
            </form>
        </div>
        // <div className={styles.formDiv}>
        //     <h1 className={styles.messageUs}>Send us a Message</h1>
        //     <form className={styles.contactForm} ref={form} onSubmit={sendEmail}>
        //         <label>Name</label>
        //         <input type="text" name="user_name" />
        //         <label>Email</label>
        //         <input type="email" name="user_email" />
        //         <label>Message</label>
        //         <textarea name="message" />
        //         <input type="submit" value="Send" />
        //     </form>
        // </div>
    );
};