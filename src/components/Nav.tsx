import { Link } from 'react-router';
import { scrollToSection } from '../utils';
import './Nav.less';
import { useCallback } from 'react';

interface NavProps {
    callback?: () => void;
}

export function Nav({ callback }: NavProps) {
    const tabs = ['home', 'about', 'towers', 'contact'];

    const handleClick = useCallback((tab: string) => {
        callback?.();
        scrollToSection(tab, tab === 'towers' || tab === 'home');
    }, [callback, scrollToSection])

    return (
        <div className={`nav`} role='navigation' aria-label='Main'>
            {tabs.map((tab, i) => <Link to={'/'} className={`tab`} key={`${tab}-${i}`} onClick={() => handleClick(tab)}>{tab.toUpperCase()}</Link>)}
        </div>
    )
}