import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import { useMemo } from 'react';
import "leaflet/dist/leaflet.css";
import type { LatLngTuple } from 'leaflet';

export function Towers() {

    const map = useMemo(() => {
        const center: LatLngTuple = [44.9778, -93.258133];

        return ( 
            <MapContainer center={center} zoom={5} style={{height: "500px", width: "500px"}}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* Additional map layers or components can be added here */}
            </MapContainer>
        )
        }, []);

    return map;
    
}