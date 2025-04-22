import './Contact.less';
import { ContactForm } from './ContactForm';

export function Contact() {
    return (
        <div className={`contact-container card`}>
            <h1>Contact us</h1>
            <div className={`contact-content`}>
                <h2>
                    For information about tower leasing - call Contact Wireless, LLC at <br/> 
                </h2>
                <span className={`phone-number`} aria-label={'Phone number'}>702-233-0153</span>
                <h2>
                    Or send us an email
                </h2>
                <ContactForm />
            </div>
        </div>
    )
}
