import React from "react";
import styles from './Button.module.scss';
import { useNavigate } from "react-router-dom";

export default function Button(){

    
    const navigate = useNavigate();

    const navigateToMain = () => {
        navigate('/main');
      };

    return(
        <button onClick={navigateToMain} className={styles.btn}> Continuar </button>
    )
}