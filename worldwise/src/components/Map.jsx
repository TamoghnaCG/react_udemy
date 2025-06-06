import React, { useState } from "react";
import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useCity } from "../contexts/CityContext";
function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [position, setPosition] = useState([51.505, -0.09]);
  const { cities } = useCity();
  const navigate = useNavigate();
  let lat = searchParams.get("lat");
  let lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={position}
        zoom={5}
        scrollWheelZoom={true}
        className={styles.mapContainer}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker position={[city.position.lat, city.position.lng]} key={city.id}>
            <Popup>
             {city.notes|| <span>No notes available for this city.</span>}
              <br />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
