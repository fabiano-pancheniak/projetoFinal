import userIcon from "../../../assets/user.svg";
import styles from "../Input.module.scss";
import classNames from "classnames";
import { UserContext } from "../../../common/context/User";
import { useContext, useState, useEffect } from "react";

export default function LoginEmail() {
    const { email, setEmail, setValidEmail, setError } = useContext(UserContext);
    
    const [iconActive, setIconActive] = useState(false);

    function validateEmail(email: HTMLInputElement) {
        const emailReg = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
		if(!email.value.match(emailReg)){
			setError(true);
			setValidEmail(false);
		}else {
			email.style.border = "";
			setError(false);
			setValidEmail(true);
		}
	}

    function inside(){
        setIconActive(true)
    }

    function outside(){
        if(email == ""){
            setIconActive(false)
        }
    }

    useEffect(()=> {
        if(email !== ""){
            setIconActive(true);
        }
    }, [email])

    return (
    <>
    <div className={styles.inputContainer}>
        <input id="email" name="email" onFocus={() => inside()} onBlur={() => outside()} className={styles.formInput} type="email" placeholder="Usuário" value={email}
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