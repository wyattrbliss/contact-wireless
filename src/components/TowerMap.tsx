import './TowerMap.less';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useMemo } from 'react';
import type { LatLngTuple } from 'leaflet';
import { TowerData } from '../types';
import { TowerInfo } from './TowerInfo';

interface TowerMapProps {
    towers: TowerData[]
}

export function TowerMap({ towers }: TowerMapProps) {
    const mapComponent = useMemo(() => {
        const center: LatLngTuple = [45.5778, -93.258133];

        return (
            <div className={`map-container`}>
                    <MapContainer center={center} zoom={7} style={{height: "500px", width: "auto"}} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        {towers.length && towers.filter((tower) => tower.latitude !== 'XXX' && tower.longitude !== 'XXX').map((tower, i) => {
                            const position: LatLngTuple = [Number(tower.latitude), Number(tower.longitude)];

                            return (
                                <Marker key={`tower-marker-${i}`} position={position}>
                                    <Popup>
                                        <TowerInfo tower={tower}/>
                                    </Popup>
                                </Marker>
                            )})
                        }
                    </MapContainer>
                </div>
        )}, []);
    
    return mapComponent;
}