import React from "react";
import styles from './Header.module.scss';
import logo from "../../assets/logo2.png";
import cloudy from "../../assets/cloudy.svg";



export default function Header(){

    const weekday = ["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"];
    const monthTxt = 
    ["janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro"];

    const d = new Date();
  
    const hour = d.getHours();
    const min = d.getMinutes();
    let day = weekday[d.getDay()];
    let month = monthTxt[d.getMonth()];
    let year = d.getFullYear();
    let dayNumber = d.getDay();

    

    
  
  
    
    
    
   

    return(
        <header className={styles.header}>
        <div className={styles.headerImg}>
            <img src={logo} alt="Logo"></img>
        </div>
        <div className={styles.time}>
            <div className={styles.hour}>{hour}:{min}</div>
            <div className={styles.date}> {day}, {dayNumber} de {month} de {year}</div>
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