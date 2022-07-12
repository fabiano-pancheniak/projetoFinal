import React from "react";
import styles from './Content.module.scss';
import logo from "../../assets/logo.png";


export default function Footer(){
    return(
        <>
        <img className={styles.logoImg} src={logo} alt="Logo"></img>
        <div className={styles.text}> 
            <div className={styles.textEngSm}>
                Our mission is
            </div>
            <div className={styles.textPtSm}>
                Nossa missão é
            </div>

            <div className={styles.textEng}>
                to transform the world
            </div>
            <div className={styles.textPtSm}>
                transformar o mundo
            </div>

            <div className={styles.textEng}>
                building digital experiences
            </div>
            <div className={styles.textPtSm}>
                construindo experiências digitais
            </div>

            <div className={styles.textEng}>
                that enable our client's growth
            </div>
            <div className={styles.textPtSm}>
                que permitam o crescimento de nossos clientes
            </div>
        </div>
        </>
    )
}