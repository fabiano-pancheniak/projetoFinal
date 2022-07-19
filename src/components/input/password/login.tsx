import passwordIcon from "../../../assets/icon-password.svg";
import styles from "../Input.module.scss";
import className from "classnames";
import { UserContext } from "../../../common/context/User";
import { useContext, useState, useEffect } from "react";
import classNames from "classnames";

export default function LoginPassword() {
    const { password, setPassword, setValidPassword, setError} = useContext(UserContext);
    const [iconActive, setIconActive] = useState(false);
    
    function validatePassword(password: HTMLInputElement) {
        const passwordReg = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/);
        const number = new RegExp(/[0-9]/g);
        const upper = new RegExp(/[A-Z]/g);
        const lower = new RegExp(/[a-z]/g);

        if (!password.value.match(passwordReg)) {
            setError(true);
            setValidPassword(false);
        } else {
            password.style.border = "";
            setError(false);
            setValidPassword(true);
        }
    }

    useEffect(()=> {
        if(password !== ""){
            setIconActive(true);
        }else{
            setIconActive(false);
        }
    }, [password])

    return (
    <>
    <div className={styles.inputContainer}>
           <input id="password" name="password" className={styles.formInput} type="password" placeholder="Senha" value={password}
            onChange={(event) => (
                setPassword(event.target.value),
                validatePassword(event.target)
            )}/>
            <img className={classNames({
                [styles.inputIcon]: true,
                [styles.iconActive]: iconActive
            })} src={passwordIcon} alt="Password Icon"/>
           
    </div>
    </>
    );
}