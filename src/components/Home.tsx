import './Home.less';
import { scrollToSection, parseTowerData } from '../utils';

export function Home() {

    const towersNumber = parseTowerData().length;

    return (
        <div className={`home-container card`}>
            <div className={'section-header'}>Building connections through communications infrastructure.</div>
            <p>
                Contact Wireless, LLC is your local provider for cell tower rental throughout Minnesota & Wisconsin.
                {' '}
                {`With ${towersNumber} tower sites across three states, we offer access to expand your communications network where you need it the most.`}
            </p>
            <button className='home-contact-button' onClick={() => scrollToSection('contact')}>Contact us</button>
        </div>
    )
}