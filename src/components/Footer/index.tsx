import React from "react";
import styles from './Footer.module.scss';


export default function Footer(){
    return(
        <div className={styles.footer}> 
            <p className={styles.text}>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</p>
            <div className={styles.line}></div>
            <div className={styles.countdownTextRefresh}> Application refresh in</div>
            <div className={styles.countdown}>
                <div className={styles.countdownNumberText}>
                <div className={styles.countdownNumber}> 60 </div>
                <div className={styles.countdownTextSeconds}> seconds </div>
                </div>
            </div>
            <div className={styles.squares}>
                <div className={styles.continue}> Continuar navegando </div>
                <div className={styles.logout}> Logout </div>
            </div>
        </div>
    )
}