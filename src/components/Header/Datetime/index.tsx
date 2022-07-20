import  React, { useState , useEffect } from 'react'
import styles from './Datetime.module.scss';

export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>
        setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div className={styles.datetime}>
            <p>{date.getHours()}:{date.getMinutes() < 10 ? ("0" + date.getMinutes()) : date.getMinutes()}</p>
        </div>
    )
}

export default DateTime