import './TowerMap.less';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useEffect, useMemo, useRef } from 'react';
import type { LatLngTuple } from 'leaflet';
import { Icon } from 'leaflet';
import { TowerData } from '../types';
import { TowerInfo } from './TowerInfo';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { scrollToSection } from '../utils';

interface TowerMapProps {
    towers: TowerData[];
    openedMarker: LatLngTuple | null;
    openedMarkerIndex: number | null;
}

export function TowerMap({ towers, openedMarker, openedMarkerIndex }: TowerMapProps) {
    const mapComponent = useMemo(() => {
        const mapRef = useRef(null);
        const center: LatLngTuple = [45.5778, -93.258133];
        const defaultIcon = new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]});
        const FlyToHandler = () => {
            const map = useMap();

            useEffect(() => {
                if (openedMarker) {
                    scrollToSection('towers');
                    map.setZoom(12);
                    map.flyTo(openedMarker);
                } else {
                    map.setZoom(7);
                    map.flyTo(center);
                }
            }, [openedMarker, openedMarkerIndex]);

            return null;
        }

        return (
            <div className={`map-container`}>
                    <MapContainer 
                        center={center}
                        zoom={7}
                        style={{height: "500px", width: "auto"}}
                        scrollWheelZoom={false}
                        ref={mapRef}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        {towers.length && towers.filter((tower) => tower.latitude !== 'XXX' && tower.longitude !== 'XXX').map((tower, i) => {
                            const position: LatLngTuple = [Number(tower.latitude), Number(tower.longitude)];

                            return (
                                <Marker 
                                    key={`tower-marker-${i}`} 
                                    position={position}
                                    icon={defaultIcon}
                                >
                                    <Popup minWidth={160}>
                                        <TowerInfo tower={tower} towerIndex={i}/>
                                    </Popup>
                                </Marker>
                            )})
                        }
                        <FlyToHandler />
                    </MapContainer>
                </div>
        )}, []);
    
    return mapComponent;
}