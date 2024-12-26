import './HamburgerMenu.less';
import { useState } from 'react';
import { Nav } from './Nav';

export function HamburgerMenu() {
    const [opened, setOpened] = useState(false);

    const handleClick = () => {
        if (opened) {
            setOpened(false);
        } else {
            setOpened(true);
        }
    }

    return (
        <>
            <div className={`hamburger-container ${opened ? 'opened' : ''}`} onClick={handleClick}>
                <div className={`top-bun`}/>
                <div className={`meat`}/>
                <div className={`bottom-bun`}/>
            </div>
            <div className={`nav-container ${opened ? 'opened' : ''}`}>
                <Nav />
            </div>
        </>
    )
}