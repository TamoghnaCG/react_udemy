import React from "react";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
import CountryItem from "./CountryItem";
function CountryList({ cities, isLoading }) {
    if (isLoading) {
    return <Spinner />;
    }
    if(!cities || cities.length === 0) {
        return <Message message="Add your First Cities by clicking on the Map"/>;
    }
    const uniqueCountries = cities.reduce((arr, city) => {
        if(!arr.map(c => c.country).includes(city.country)) {
            return[...arr, {country: city.country, emoji: city.emoji}];
        }
        else {
            return arr;
        }
    },[])
    return (
        <ul className={styles.countryList}>
            {
                uniqueCountries.map((country) => (<CountryItem country={country} key={country.country} />))
            }
      </ul>
  )
}

export default CountryList;
