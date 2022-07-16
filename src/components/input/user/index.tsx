import userIcon from "../../../assets/user.svg";
import styles from "../Input.module.scss";
import { UserContext } from "../../../common/context/User";
import { useContext } from "react";

export default function EmailInput() {
    const { email, setEmail, setValidEmail, setError } = useContext(UserContext);

    function validateEmail(email: HTMLInputElement) {
        const emailReg = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
		if(!email.value.match(emailReg)){
			email.style.border = "1px solid #E9B425";
			setError(true);
			setValidEmail(false);
		}else {
			email.style.border = "";
			setError(false);
			setValidEmail(true);
		}
	}

    return (
    <>
    <div className={styles.inputContainer}>
        <input id="email" name="email" className={styles.formInput} type="email" placeholder="Usuário" value={email}
        onChange={(event) => (
            setEmail(event.target.value),
            validateEmail(event.target)
        )}
    />
    <img className={styles.inputIcon} src={userIcon} alt="User Icon"/></div>
        </>
    )
}