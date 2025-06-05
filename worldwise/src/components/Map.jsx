import React from 'react'
import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from 'react-router-dom';


function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
let lat =  searchParams.get("lat")
let lng =  searchParams.get("lng")
  return (
    <div className={styles.mapContainer} onClick={()=>{navigate("form")}}>
      <div>

      Map
      position : {lat}, {lng}
      </div>
<button onClick={()=>{setSearchParams({lat:786, lng:878})}}>Change position</button>

    </div>
  )
}

export default Map