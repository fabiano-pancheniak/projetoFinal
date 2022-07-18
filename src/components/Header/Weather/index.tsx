import styles from './Weather.module.scss';
import cloudy from "../../../assets/cloudy.svg";
import { useEffect, useState } from 'react';

export default function Weather() { 
    var [location, setCity] = useState<string>();
    var [temperature, setTemperature] = useState<number>();
    const key = '0b673019'  
    
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition( function(position) {
            let lat = position.coords.latitude;
            let long = position.coords.longitude; 

            fetch(`https://api.hgbrasil.com/weather?format=json-cors&lat=${lat}&lon=${long}&key=${key}`)
            .then(res => res.json())
            .then(result => {
                location = result.results.city;
                temperature = result.results.temp;
                setCity(location)
                setTemperature(temperature);
            });
        }, defaultLocation()
        );
    }, [])

    function defaultLocation(): any {
        fetch(`https://api.hgbrasil.com/weather?format=json-cors&key=0b673019`)
        .then(response => response.json())
        .then(data => {
                location = data.results.city;
                temperature = data.results.temp;
                setCity(location)
                setTemperature(temperature);
            }
        )
    }

    return(
    <>
        <div className={styles.locationTemp}>
            <div className={styles.location}> {location} </div>
            <div className={styles.temperatureDiv}>
                <img className={styles.temperatureImg} src={cloudy} alt="Temperature icon"></img>
                <div className={styles.temperature}> {temperature}º </div>
            </div>
        </div>
    </>
    );
}