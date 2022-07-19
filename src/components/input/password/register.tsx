import passwordIcon from "../../../assets/icon-password.svg";
import styles from "../Input.module.scss";
import className from "classnames";
import { UserContext } from "../../../common/context/User";
import { useContext, useState } from "react";
import classNames from "classnames";

export default function RegisterPassword() {
    const { password, setPassword, setValidPassword, setError} = useContext(UserContext);
    
    const [numCheck, setNumChecked] = useState(false);
    const [upperCheck, setUpperChecked] = useState(false);
    const [lowerCheck, setLowerChecked] = useState(false);
    const [lengthCheck, setLengthChecked] = useState(false);

    function validatePassword(password: HTMLInputElement) {
        const passwordReg = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/);
        const number = new RegExp(/[0-9]/g);
        const upper = new RegExp(/[A-Z]/g);
        const lower = new RegExp(/[a-z]/g);

        if(!password.value.match(number)){
            setNumChecked(false)
        } else{
            setNumChecked(true)
        }

        if(!password.value.match(upper)){
            setUpperChecked(false)
        } else {
            setUpperChecked(true)
        }

        if(!password.value.match(lower)){
            setLowerChecked(false)
        } else {
            setLowerChecked(true)
        }

        if(password.value.length < 6){
            setLengthChecked(false)
        }else{
            setLengthChecked(true)
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
                <div className={classNames({[styles.notChecked]: true, [styles.checkedImg]: numCheck})}></div>
                <label className={classNames({[styles.green]: numCheck})} htmlFor="numero">Número</label>
                <br></br>
                <div className={classNames({[styles.notChecked]: true, [styles.checkedImg]: upperCheck})}></div>
                <label className={classNames({[styles.green]: upperCheck})} htmlFor="maiuscula">Maiuscula</label>
            </div>
            <div className={styles.checkboxesRight}>
                <div className={classNames({[styles.notChecked]: true, [styles.checkedImg]: lowerCheck})}></div>
                <label className={classNames({[styles.green]: lowerCheck})} htmlFor="minuscula">Minuscula</label>
                <br></br>
                <div className={classNames({[styles.notChecked]: true, [styles.checkedImg]: lengthCheck})}></div>
                <label className={classNames({[styles.green]: lengthCheck})} htmlFor="caracteres">6 caracteres</label>
            </div>
    </div>
    </>
    );
}