import './Towers.less';
import { useState } from 'react';
import { parseTowerData } from '../utils';
import { TowerMap } from './TowerMap';
import { TowerList } from './TowerList';
import { LatLngTuple } from 'leaflet';

const CENTER: LatLngTuple = [45.5778, -93.258133];

export function Towers() {
    const [isMapView, setIsMapView] = useState(false);
    const [openedMarker, setOpenedMarker] = useState<LatLngTuple | null>(CENTER);
    const [openedMarkerIndex, setOpenedMarkerIndex] = useState<number | null>(null);
    const towerData = parseTowerData();

    const enableMap = () => {
        if (isMapView) {
            return;
        }
        setIsMapView(true);
        setOpenedMarker(null);
        setOpenedMarkerIndex(null);
    }

    const enableList = () => {
        if (!isMapView) {
            return;
        }
        setIsMapView(false);
        setOpenedMarker(null);
        setOpenedMarkerIndex(null);
    }

    const flyToMarker = (towerPos: LatLngTuple, towerIndex: number) => {
        enableMap();
        setOpenedMarker(towerPos);
        setOpenedMarkerIndex(towerIndex);
    }

    return (
        <div className={`towers-container card`}>
            {/* <div className={`section-header`}>Tower locations</div> */}
            <h1>Tower Locations</h1>
            <div className={`towers-content`}>
                {isMapView && (
                    <>
                        <div className={`towers-sub-header`}>
                            <h3>Here's a map of our tower sites</h3>
                            <button aria-label={'Show list view'} className={`tower-view-toggle`} onClick={enableList}>Show list</button>
                        </div>
                        <TowerMap towers={towerData} openedMarker={openedMarker} openedMarkerIndex={openedMarkerIndex}/>
                    </>
                )}
                {!isMapView && (
                    <>
                        <div className={`towers-sub-header`}>
                            <h3>Here's a list of our tower sites</h3>
                            <button aria-label={'Show map view'} className={`tower-view-toggle`} onClick={enableMap}>Show map</button>
                        </div>
                        <TowerList towers={towerData} flyToMarker={flyToMarker}/>
                    </>
                )}
            </div>
        </div>
    );
}