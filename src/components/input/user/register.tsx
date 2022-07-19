import userIcon from "../../../assets/user.svg";
import styles from "../Input.module.scss";
import { UserContext } from "../../../common/context/User";
import { useContext, useState, useEffect } from "react";
import classNames from "classnames";

export default function RegisterEmail() {
    const { email, setEmail, setValidEmail, setError } = useContext(UserContext);
    const [iconActive, setIconActive] = useState(false);

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

    useEffect(()=> {
        if(email !== ""){
            setIconActive(true);
        }else{
            setIconActive(false);
        }
    }, [email])

    return (
    <>
    <div className={styles.inputContainer}>
        <input id="email" name="email" className={styles.formInput} type="email" placeholder="Usuário" value={email}
        onChange={(event) => (
            setEmail(event.target.value),
            validateEmail(event.target)
        )}
    />
    <img className={classNames({
                [styles.inputIcon]: true,
                [styles.iconActive]: iconActive
            })} src={userIcon} alt="user Icon"/>
            </div>
    </>
    )
}