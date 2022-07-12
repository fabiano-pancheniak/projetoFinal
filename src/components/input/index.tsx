import React from "react";
import styles from './Input.module.scss';
import userIcon from "../../assets/user.svg";
import passwordIcon from "../../assets/icon-password.svg";


export default function Input(){
    return(
        <>
            <input className={styles.input} placeholder="Usuário"></input>
            <img className={styles.inputIcon} src={userIcon} alt="User icon" />

            <input className={styles.input} placeholder="Senha"></input>
            <img className={styles.inputIcon} src={passwordIcon} alt="Password icon" />
        </>
    )
}