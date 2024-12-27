import { Link } from 'react-router';
import { useCallback } from 'react';

import './Nav.less';

export function Nav() {
    const tabs = ['about', 'towers', 'contact'];

    const onTabSelect = useCallback((tab: string) => {
        const section = document.getElementById(tab);
        if (section) {
            section.scrollIntoView({behavior: 'smooth'});
        } else {

            // allow time for routing
            setTimeout(() => {
                const section = document.getElementById(tab);
                section?.scrollIntoView({behavior: 'smooth'})
            }, 500);
        }
    }, [document]);

    return (
        <div className={`nav`}>
            {tabs.map((tab, i) => <Link to={'/'} className={`tab`} key={`${tab}-${i}`} onClick={() => onTabSelect(tab)}>{tab.toUpperCase()}</Link>)}
        </div>
    )
}