import './ContactForm.less';
import { FormEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_o5fs6ii';
const TEMPLATE_ID = 'template_0o3q9zd';
const PUBLIC_KEY = 'd0pmJfudT2Oyhm4VT';

export function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();

        if (formRef && formRef.current) {
            emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
                publicKey: PUBLIC_KEY,
            })
            .then(
                () => {
                    alert('SUCCESS! Your email has been sent. We will respond as soon as possible.')
                },
                () => {
                    alert(`FAILED... Your email could not be sent. Please try again shortly, or manually send us an email at: conwireless@gmail.com. Sorry for the inconvenience.`);
                },
            );
        }
    };

    return (
        <form className={`contact-form`} ref={formRef} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="name" placeholder='Your name' required/>
            <label>Email</label>
            <input type="email" name="email" placeholder='Your email' required/>
            <label>Message</label>
            <span className={`email-sub-header`}>{`(Please include the site name of the tower you are interested in)`}</span>
            <textarea className={`contact-message-box`} name="message" required/>
            <div className={`contact-form-buttons`}>
                <input className={`form-button`} type="submit" value="Send" aria-label='Send email'/>
                <input className={`form-button`} type="reset" value="Reset" aria-label='Reset form'/>
            </div>
        </form>
    );
};