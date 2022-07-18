import React from "react";
import styles from './Header.module.scss';
import logo from "../../assets/logo2.png";
import DateTime from "./Datetime";
import Weather from "./Weather";



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
            <div className={styles.hour}><DateTime /></div>
            <div className={styles.date}> {day}, {dayNumber} de {month} de {year}</div>
        </div>
        <Weather />
        </header>
    )
}