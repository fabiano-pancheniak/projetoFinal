import passwordIcon from "../../../assets/icon-password.svg";
import styles from "../Input.module.scss";
import className from "classnames";
import { UserContext } from "../../../common/context/User";
import { useContext, useState } from "react";
import classNames from "classnames";

export default function InputPassword() {
    const { password, setPassword, setValidPassword, setError} = useContext(UserContext);
    
    function validatePassword(password: HTMLInputElement) {
        const passwordReg = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/);
        const number = new RegExp(/[0-9]/g);
        const upper = new RegExp(/[A-Z]/g);
        const lower = new RegExp(/[a-z]/g);
        const numCheck = document.getElementById('numero',) as HTMLInputElement | null;
        const upperCheck = document.getElementById('maiuscula',) as HTMLInputElement | null;
        const lowerCheck = document.getElementById('minuscula',) as HTMLInputElement | null;
        const lengthCheck = document.getElementById('length',) as HTMLInputElement | null;

        //o pior codigo ja escrito
        if(!password.value.match(number)){
            //@ts-ignore
            numCheck.checked = false;
        } else{
            //@ts-ignore
            numCheck.checked = true;
        }

        if(!password.value.match(upper)){
            //@ts-ignore
            upperCheck.checked = false;
        } else {
            //@ts-ignore
            upperCheck.checked = true
        }

        if(!password.value.match(lower)){
            //@ts-ignore
            lowerCheck.checked = false;
        } else {
            //@ts-ignore
            lowerCheck.checked = true;
        }

        if(password.value.length < 6){
            //@ts-ignore
            lengthCheck.checked = false;
        }else{
            //@ts-ignore
            lengthCheck.checked = true;
        }
        if (!password.value.match(passwordReg)) {
            password.style.border = "solid 1px #E9B425";
            setError(true);
            setValidPassword(false);
        } else {
            password.style.border = "";
            setError(false);
            setValidPassword(true);
        }
    }



    return (
    <>
    <div className={styles.inputContainer}>
           <input id="password" name="password" className={styles.formInput} type="password" placeholder="Senha" value={password}
            onChange={(event) => (
                setPassword(event.target.value),
                validatePassword(event.target)
            )}/>
            <img className={styles.inputIcon} src={passwordIcon} alt="Password Icon"/>
            <div className={styles.checkboxesLeft}>
                <input className={styles.checked} type="checkbox" id="numero" name="numero" disabled></input>
                <label htmlFor="numero">Número</label>
                <span className={styles.customCheck}></span>
                <br></br>
                <input className={styles.checked} type="checkbox" id="maiuscula" name="maiuscula" disabled></input>
                <label htmlFor="maiuscula">Maiuscula</label>
                
                <span className={styles.customCheck}></span>
            </div>
            <div className={styles.checkboxesRight}>
                <input className={styles.checked} type="checkbox" id="minuscula" name="minuscula" disabled></input>
                <label htmlFor="minuscula">Minuscula</label>
                <span className={styles.customCheck}></span>
                <br></br>
                <input className={styles.checked} type="checkbox" id="length" name="length" disabled></input>
                <label htmlFor="length">6 Caracteres</label>
                <span className={styles.customCheck}></span>
            </div>
    </div>
    </>
    );
}