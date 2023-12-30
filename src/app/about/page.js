"use client"
import { useState, useEffect } from "react";
import Bio from "./bio";
import styles from "./about.module.css";

export default function About() {
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
        <main className={styles.aboutUs}>
            <h1 className={styles.pageTitle}>About Us</h1>
            <Bio />
        </main>
    )
}