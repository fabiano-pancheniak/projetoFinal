import passwordIcon from "../../../assets/icon-password.svg";
import styles from "../Input.module.scss";
import classNames from "classnames";
import { UserContext } from "../../../common/context/User";
import { useContext } from "react";

export default function InputPassword() {
    const { password, setPassword, setValidPassword, setError} = useContext(UserContext);

    function validatePassword(password: HTMLInputElement) {
        const passwordReg = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/);
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
    </div>
    </>
    );
}