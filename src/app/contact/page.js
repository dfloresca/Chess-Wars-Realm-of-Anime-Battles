"use client"
import { useState, useEffect } from "react";
import ContactUs from "../components/contactUs";
import TechSupport from "../components/techSupport";
import Inspiration from "../components/inspiration";
import styles from "./contact.module.css"
export default function Contact() {
    // state is what the data is representing in realtime
    // const [data, setData] = useState(null);
    // const [isLoading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             // data is an object
    //             setData(data);
    //             setLoading(false);
    //         })
    // }, []);

    // if (isLoading) return <p>Loading...</p>
    // if (!data) return <p>No data shown...</p>

    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.pageTitle}>Contact Us</h1>
            <div className={styles.contactUs}>
                <div className={styles.formPhoto}>
                    <ContactUs />
                    <TechSupport />
                </div>
                <Inspiration />
            </div>
        </div>
    )
}