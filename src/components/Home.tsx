import './Home.less';
import { scrollToSection, parseTowerData } from '../utils';

export function Home() {

    const towersNumber = parseTowerData().length;

    return (
        <div className={`home-container card`}>
            <h1>Building connections through communications infrastructure.</h1>
            <p>
                Contact Wireless, LLC provides tower space for lease in Minnesota, Wisconsin and Washington State.
                {' '}
                {`With ${towersNumber} tower sites to choose from, we can help expand your communications network where you need it most.`}
            </p>
            <button aria-label={'Navigate to the contact section'} className='home-contact-button' onClick={() => scrollToSection('contact')}>Contact us</button>
        </div>
    )
}