import React from "react";
import styles from './Image.module.scss';

import background from "../../assets/background.png";

export default function Image(){
    return(
        <div className={styles.imgContainer}>
            <img className={styles.img} src={background} alt="Main image" />
        </div>
    )
}