import './TowerList.less';
import { TowerData } from "../types";
import { TowerInfo } from './TowerInfo';
import type { LatLngTuple } from 'leaflet';

interface TowerListProps {
    towers: TowerData[];
    flyToMarker: (towerPos: LatLngTuple, towerIndex: number) => void;
}

export function TowerList({ towers, flyToMarker }: TowerListProps) {
    return (
        <div className={`tower-list-container`}>
            {towers.length && towers.map((tower, i) => {
                return (
                    <div key={`tower-list-item-${i}`}>
                        <TowerInfo tower={tower} towerIndex={i} flyToMarker={flyToMarker}/>
                    </div>
                )
            })}
        </div>
    )
}