import React from "react";
import styles from './Footer.module.scss';
import { useNavigate } from "react-router-dom";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";
  import { auth } from "../../firebase-config";


export default function Footer(){
    const navigate = useNavigate();
    function navigateHome() {
        navigateHome();
		navigate("/");
	}

    const logout = async () => {
        await signOut(auth);
      };

    function redirect(){
        window.open('https://google.com', '_blank');
    }

    const [counter, setCounter] = React.useState(3600);
    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
        if(counter === 0 ){
              logout();
              
        }
      }, [counter]);
    return(
        <div className={styles.footer}> 
            <p className={styles.text}>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</p>
            <div className={styles.line}></div>
            <div className={styles.countdownTextRefresh}> Application refresh in</div>
            <div className={styles.countdown}>
                <div className={styles.countdownNumberText}>
                <div className={styles.countdownNumber}> {counter} </div>
                <div className={styles.countdownTextSeconds}> seconds </div>
                </div>
            </div>
            <div className={styles.continueLogout}>
                <div className={styles.squares}>
                    <div className={styles.continue}> 
                        <button onClick={() => logout()} className={styles.btnContinue}> Continuar navegando </button>
                    </div>
                    <div className={styles.logout}> 
                        <button onClick={() => logout()} className={styles.btnLogout}> Logout </button>
                    </div>
                </div>
            </div>
        </div>
    )
}