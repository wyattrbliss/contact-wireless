import './Towers.less';
import { useState } from 'react';
import "leaflet/dist/leaflet.css";
import { parseTowerData } from '../utils';
import { TowerMap } from './TowerMap';
import { TowerList } from './TowerList';


export function Towers() {
    const [isMapView, setIsMapView] = useState(false);
    const towerData = parseTowerData();

    const enableMap = () => {
        if (isMapView) {
            return;
        }
        setIsMapView(true);
    }

    const enableList = () => {
        if (!isMapView) {
            return;
        }
        setIsMapView(false);
    }

    return (
        <div className={`towers-container card`}>
            <h1>Tower locations</h1>
            <div className={`towers-content`}>
                {isMapView && (
                    <>
                        <div className={`towers-sub-header`}>
                            <h2>Here's a map of our tower sites</h2>
                            <button className={`tower-view-toggle`} onClick={enableList}>Show list</button>
                        </div>
                        <TowerMap towers={towerData} />
                    </>
                )}
                {!isMapView && (
                    <>
                        <div className={`towers-sub-header`}>
                            <h2>Here's a list of our tower sites</h2>
                            <button className={`tower-view-toggle`} onClick={enableMap}>Show map</button>
                        </div>
                        <TowerList towers={towerData} />
                    </>
                )}
            </div>
        </div>
    );
}