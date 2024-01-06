import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from "../contact/contact.module.css"
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



// import React, { useState } from 'react';
// import axios from 'axios';
// // import { Form, Button } from 'react-bootstrap';
// import styles from "../contact/contact.module.css";

// export default function ContactUs() {
    
//     return (
//         <div className={styles.formDiv}>
//             <h1 className={styles.messageUs}>Send us a Message</h1>
//             <form className={styles.contactForm}>
//                 {/* <div className={styles.fullName}> */}
//                     <label htmlFor="fullName">Full Name</label>
//                     <input placeholder="Please enter Full Name" name="fullName" type="text" id="fullName" />
//                     <label htmlFor="emailAddress">Email Address</label>
//                     <input placeholder="Please enter Email Address" name="emailAddress" type="email" id="emailAddress" />
//                 {/* </div> */}
//                 <label htmlFor="subject">Subject</label>
//                 <input placeholder="Enter subject here..." name="subject" type="text" id="subject" />
//                 <label htmlFor="message">Message</label>
//                 <textarea name="message" type="text" id="message" rows={5} />
//                 <div className={styles.buttons}>
//                     <button type="submit" >Send</button>
//                     <button type='reset' >Clear</button>
//                 </div>
//             </form>
//         </div>
//     )
//     }





// const [state, setState] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: ""
// });

// const [result, setResult] = useState(null);


// const sendEmail = event => {
//     event.preventDefault();
//     axios
//         .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/send`, { ...state })
//         .then(response => {
//             setResult(response.data);
//             setState({
//                 name: '', 
//                 email: '', 
//                 subject: '', 
//                 message: '' 
//             });
//         })
//         .catch(() => {
//             setResult({ success: false, message: 'Something went wrong. Try again later'});
//         })
    
// }

// const onInputChange = event => {
//     const { name, value } = event.target;

//     setState({
//         ...state,
//         [name]: value
//     });
// };

// return (
//     <div className={styles.formDiv}>
//         {result && (
//             <p className={`${result.success ? 'success' : 'error'}`}>
//                 {result.message}
//             </p>
//         )}
//         <h1 className={styles.messageUs}>Send us a Message</h1>
//         <form className={styles.contactForm} onSubmit={sendEmail}>
//             <Form.Group controlId="name">
//                 <Form.Label>Name</Form.Label>
//                 <Form.Control
//                     type="text"
//                     name="name"
//                     value={state.name}
//                     placeholder="Enter your full name"
//                     onChange={onInputChange}
//                 />
//             </Form.Group>
//             <Form.Group controlId="email">
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control
//                     type="text"
//                     name="email"
//                     value={state.email}
//                     placeholder="Enter your email"
//                     onChange={onInputChange}
//                 />
//             </Form.Group>
//             <Form.Group controlId="subject">
//                 <Form.Label>Subject</Form.Label>
//                 <Form.Control
//                     type="text"
//                     name="subject"
//                     value={state.subject}
//                     placeholder="Enter subject"
//                     onChange={onInputChange}
//                 />
//             </Form.Group>
//             <Form.Group controlId="message">
//                 <Form.Label>Message</Form.Label>
//                 <Form.Control
//                     as="textarea"
//                     name="message"
//                     value={state.message}
//                     rows="3"
//                     placeholder="Enter your message"
//                     onChange={onInputChange}
//                 />
//             </Form.Group>
//             <div className={styles.buttons}>
//                 <Button variant="primary" type="submit">
//                     Submit
//                 </Button>
//             </div>
//         </form>
//     </div>
// )
