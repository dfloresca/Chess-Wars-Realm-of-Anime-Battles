"use client";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React from "react";
import styles from "./PaymentForm.module.css";

export default function PaymentForm() {
    const stripe = useStripe();
    const elements = useElements();

    const onSubmit = async function(e) {
        e.preventDefault();
        const cardElement = elements?.getElement("card");

        try {
            if (!stripe || !cardElement) return null;
            const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/create-payment-intent`, {
                data: { amount: 89 },
            });
            const clientSecret = response.data;

            await stripe?.confirmCardPayment(clientSecret, {
                payment_method: { card: cardElement },
            });

            // Get the name and address values from the form
            const name = e.target.name.value;
            const address = e.target.address.value;

            // Send the name and address to your database
            await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/users`, {
                name,
                address,
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form className={styles.checkoutForm} onSubmit={onSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" required />

            <CardElement />
            <button type="submit">Submit</button>
        </form>
    );
}