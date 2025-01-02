import './Contact.less';

export function Contact() {
    return (
        <div className={`contact-container card`}>
            <h1>Contact us</h1>
            <div className={`contact-content`}>
                <h2>
                    For information about tower rental - call Contact Wireless, LLC at <br/> 
                </h2>
                <span className={`phone-number`}>702-233-0153</span>
                <h2>
                    Or send us an email
                </h2>
                <form className={`contact-form`} action="mailto:wyattrbliss@gmail.com" method="post" encType="text/plain">
                    Name:
                    <input type="text" name="name" required placeholder='John Doe'/>
                    E-mail:
                    <input type="email" name="email" required placeholder='johndoe@example.com'/>
                    Comment:
                    <span className={`email-sub-header`}>{`(Please include the site name of the tower you are interested in)`}</span>
                    <textarea className={`contact-comment-box`} name="comment" readOnly={false}/>
                    <div className={`contact-form-buttons`}>
                        <input type="submit" value="Send" />
                        <input type="reset" value="Reset" />
                    </div>
                </form>
            </div>
        </div>
    )
}
