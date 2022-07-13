import React from "react";
import styles from './Input.module.scss';
import userIcon from "../../assets/user.svg";
import passwordIcon from "../../assets/icon-password.svg";
import {useState} from 'react';


export default function Input(){

    return(
        <>
            <div></div>
            {true ? <input className={styles.input} placeholder="Usuário"></input> : <input className={styles.inputError} placeholder="Usuário"></input>}
            <img className={styles.inputIcon} src={userIcon} alt="User icon" />

            {true ? <input type='password' className={styles.input} placeholder="Senha"></input> : <input type='password' className={styles.inputError} placeholder="Senha"></input>}
            <img className={styles.inputIcon} src={passwordIcon} alt="Password icon" />
        </>
    )
}