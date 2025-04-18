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
            <div className={`section-header`}>Tower locations</div>
            <div className={`towers-content`}>
                {isMapView && (
                    <>
                        <div className={`towers-sub-header`}>
                            <h3>Here's a map of our tower sites</h3>
                            <button className={`tower-view-toggle`} onClick={enableList}>Show list</button>
                        </div>
                        <TowerMap towers={towerData} />
                    </>
                )}
                {!isMapView && (
                    <>
                        <div className={`towers-sub-header`}>
                            <h3>Here's a list of our tower sites</h3>
                            <button className={`tower-view-toggle`} onClick={enableMap}>Show map</button>
                        </div>
                        <TowerList towers={towerData} />
                    </>
                )}
            </div>
        </div>
    );
}