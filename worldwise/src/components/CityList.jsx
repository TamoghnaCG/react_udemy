import React from "react";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
import { useCity } from "../contexts/CityContext";
function CityList() {
    const { cities, isLoading } = useCity()
    console.log('CityList', cities, isLoading);
    
    if (isLoading) {
    return <Spinner />;
    }
    if(!cities || cities.length === 0) {
        return <Message message="Add your First Cities by clicking on the Map"/>;
    }
    return (
        <ul className={styles.cityList}>
            {
                cities.map((city)=>(<CityItem key={city.id} city={city} />))
            }
      </ul>
  )
}

export default CityList;
