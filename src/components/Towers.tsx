import './Towers.less';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useMemo } from 'react';
import "leaflet/dist/leaflet.css";
import type { LatLngTuple } from 'leaflet';

export function Towers() {
    const map = useMemo(() => {
        const center: LatLngTuple = [44.9778, -93.258133];

        return (
            <div className={`towers-container card`}>
                <h1>Our cell sites</h1>
                <p>Here's a map of our tower locations</p>
                <MapContainer center={center} zoom={5} style={{height: "500px", width: "auto"}} scrollWheelZoom={false}>
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    
                    <Marker position={center}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        )
        }, []);

    return map;
}