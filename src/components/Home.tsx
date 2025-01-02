import './Home.less';
import { scrollToSection } from '../utils';

export function Home() {
    return (
        <div className={`home-container card`}>
            <h1>Building connections through communications infrastructure.</h1>
            <p>
                Contact Wireless, LLC is your local provider for cell tower rental throughout Minnesota & Wisconsin.
                With 18 sites across three states, we offer access to expand your communications network where you need it the most.
            </p>
            <button className='home-contact-button' onClick={() => scrollToSection('contact')}>Contact us</button>
        </div>
    )
}