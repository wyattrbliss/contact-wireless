import './Header.less';
import { HamburgerMenu } from "./HamburgerMenu";

export function Header() {
    return (
        <div className={`header-container`}>
            <HamburgerMenu />
            Contact Wireless, LLC
        </div>
    )
}