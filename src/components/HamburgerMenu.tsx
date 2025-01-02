import './HamburgerMenu.less';
import { useState } from 'react';
import { Nav } from './Nav';

export function HamburgerMenu() {
    const [opened, setOpened] = useState(false);

    const openNav = () => {
        setOpened(true);
    }

    const closeNav = () => {
        setOpened(false);
    }

    return (
        <>
            <div className={`hamburger-container ${opened ? 'opened' : ''}`} onClick={opened ? closeNav : openNav}>
                <div className={`top-bun`}/>
                <div className={`meat`}/>
                <div className={`bottom-bun`}/>
            </div>
            <div className={`nav-container ${opened ? 'opened' : ''}`}>
                <Nav callback={closeNav}/>
            </div>
        </>
    )
}