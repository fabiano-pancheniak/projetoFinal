import React from "react";
import styles from './Title.module.scss';
import Input from "../input";
import Button from "../button";
import classnames from 'classnames';

export default function Title(){

    return(
        <div className={styles.titleContainer}>
            <div className={styles.titleDiv}>
            <h1 className={styles.title}> Olá,</h1>
            <p className={styles.subtitle}> Para continuar navegando de forma segura, efetue o login na rede.</p>
            </div>
            <div className={styles.form}>
            <h2 className={styles.login}> Login </h2>
            <form>
            <Input />
            {false ? <div className={classnames(styles.error)}> Ops, usuário ou senha inválidos. Tente novamente!</div> : ''}
            <Button />
            </form>
            </div>
        </div>
    )
}