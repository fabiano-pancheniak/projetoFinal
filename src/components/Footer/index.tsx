import React from "react";
import styles from './Footer.module.scss';


export default function Footer(){
    return(
        <div className={styles.footer}> 
            <p className={styles.text}>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</p>
        </div>
    )
}