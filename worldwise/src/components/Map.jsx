import React, { use, useEffect, useState } from "react";
import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import { useCity } from "../contexts/CityContext";
function Map() {
  const [searchParams] = useSearchParams();
  const [position, setPosition] = useState([51.505, -0.09]);
  const { cities } = useCity();
  const navigate = useNavigate();
  let Maplat = searchParams.get("lat");
  let Maplng = searchParams.get("lng");

  useEffect(
    function () {
      if (Maplat && Maplng) {
        setPosition([Maplat, Maplng]);
        // navigate(`/app/cities?lat=${Maplat}&lng=${Maplng}`);
      }
    },
    [Maplat, Maplng]
  );
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
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              {city.notes || <span>No notes available for this city.</span>}
              <br />
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={position} />
        <DetectClick/>
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position, map.getZoom());
  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
    
  })

}

export default Map;
