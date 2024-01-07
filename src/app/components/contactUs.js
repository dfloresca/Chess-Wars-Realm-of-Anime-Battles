import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import styles from "../contact/contact.module.css";

export default function ContactUs() {
    const [state, setState] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [result, setResult] = useState(null);


    const sendEmail = event => {
        event.preventDefault();
        axios
            .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/send`, { ...state })
            .then(response => {
                setResult(response.data);
                setState({
                    name: '', 
                    email: '', 
                    subject: '', 
                    message: '' 
                });
            })
            .catch(() => {
                setResult({ success: false, message: 'Something went wrong. Try again later'});
            })
        
    }

    const onInputChange = event => {
        const { name, value } = event.target;

        setState({
            ...state,
            [name]: value
        });
    };

    return (
        <div className={styles.formDiv}>
            {result && (
                <p className={`${result.success ? 'success' : 'error'}`}>
                    {result.message}
                </p>
            )}
            <h1 className={styles.messageUs}>Send us a Message</h1>
            <form className={styles.contactForm} onSubmit={sendEmail}>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={state.name}
                        placeholder="Enter your full name"
                        onChange={onInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        name="email"
                        value={state.email}
                        placeholder="Enter your email"
                        onChange={onInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="subject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                        type="text"
                        name="subject"
                        value={state.subject}
                        placeholder="Enter subject"
                        onChange={onInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="message"
                        value={state.message}
                        rows="3"
                        placeholder="Enter your message"
                        onChange={onInputChange}
                    />
                </Form.Group>
                <div className={styles.buttons}>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    )
}



