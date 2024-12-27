import './Contact.less';

export function Contact() {
    return (
        <div className={`contact-container card`}>
            <h1>Contact us</h1>
            <h2>For information about tower rental, call Contact Wireless LLC at 702-233-0153</h2>
            <h2>Or send us an email</h2>
            <form action="mailto:wyattrbliss@gmail.com" method="post" encType="text/plain">
                Name:<br/>
                <input type="text" name="name" /><br/>
                E-mail:<br/>
                <input type="text" name="mail" /><br/>
                Comment:<br/>
                <input type="text" name="comment" size={50} /><br/><br/>
                <input type="submit" value="Send" />
                <input type="reset" value="Reset" />
            </form>
        </div>
    )
}