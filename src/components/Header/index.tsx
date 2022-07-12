import React from "react";
import styles from './Header.module.scss';
import logo from "../../assets/logo2.png";
import cloudy from "../../assets/cloudy.svg";


export default function Header(){
    return(
        <header className={styles.header}>
        <div className={styles.headerImg}>
            <img src={logo} alt="Logo"></img>
        </div>
        <div className={styles.time}>
            <div className={styles.hour}> 08:07</div>
            <div className={styles.date}> terça feira, 12 de julho de 2022</div>
        </div>
        <div className={styles.locationTemp}>
            <div className={styles.location}> Passo Fundo - RS</div>
            <div className={styles.temperatureDiv}>
            <img className={styles.temperatureImg} src={cloudy} alt="Temperature icon"></img>
            <div className={styles.temperature}> 22º</div>
            </div>
        </div>
        </header>
    )
}