import './Header.less';
import { HamburgerMenu } from './HamburgerMenu';
import logo from '../assets/logo.jpg';
import { scrollToSection } from '../utils';

export function Header() {
    return (
        <div className={`header-container`}>
            <HamburgerMenu />
            <div className={`logo-name-container`} onClick={() => scrollToSection('home')}>
                <span className={`company-name`}>
                    Contact Wireless, LLC
                </span>
                <img src={logo} width={52}/>
            </div>
        </div>
    )
}