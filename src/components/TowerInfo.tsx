import './TowerInfo.less';
import { TowerData } from "../types";
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { LatLngTuple } from 'leaflet';

interface TowerInfoProps {
    tower: TowerData;
    towerIndex: number;
    flyToMarker?: (towerPos: LatLngTuple, towerIndex: number) => void;
}

export function TowerInfo({tower, towerIndex, flyToMarker}: TowerInfoProps) {
    const { city, state, elevation, height, asr, latitude, longitude, description } = tower;
    const towerPos: LatLngTuple = [Number(latitude), Number(longitude)];   

    return (
        <div className={`tower-info`}>
            <div className={`tower-info-header`}>
                <h4>{`${city}, ${state}`}</h4>
                {flyToMarker && (
                    <div 
                        className={`tooltip`}
                        onClick={() => flyToMarker(towerPos, towerIndex)}
                    >
                        <img 
                            src={markerIconPng}
                            width={10}
                            aria-label='Open tower in map'
                        />
                        <span className={`tooltiptext`}>Open in map</span>
                    </div>
                    
                )}
            </div>
            {`Ground elevation: ${elevation === 'XXX' ? 'Unknown' : elevation + ' ft. MSL'}`} <br/>
            {`Tower height: ${height === 'XXX' ? 'Unknown' : height + ' ft. high'}`} <br/>
            {asr !== 'XXX' && <span>{`ASR #: ${asr}`}  <br/></span>}
            {`Description: ${description === 'XXX' ? 'None' : description}`} <br/>
        </div>
    )
}