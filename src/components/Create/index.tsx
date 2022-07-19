import styles from "./Create.module.scss";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../common/context/User";
import classNames from "classnames";
import RegisterEmail from "../input/user/register";
import RegisterPassword from "../input/password/register";
import {Link} from 'react-router-dom';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
  } from "firebase/auth";

import { auth } from "../../firebase-config";

export default function Create() {
	const navigate = useNavigate();
	const { validEmail, validPassword } = useContext(UserContext);
	const [error, setError] = useState(false);
	const [registerEmail, setRegisterEmail] = useState("");
	const [registerPassword, setRegisterPassword] = useState("");
	const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");
  
	const [user, setUser] = useState({});

	function navigateLogin() {
		navigate("/");
	}

	function validate() {
		
		let notEmpty = true;
		const userInput = (document.getElementById('email') as HTMLInputElement).value
		const passwordInput = (document.getElementById('password') as HTMLInputElement).value

		if(userInput === '' || passwordInput === ''){
			notEmpty = false;
		}

		if(!validEmail || !validPassword || !notEmpty){
			setError(true);
			return false;
		}

		

		const register = async () => {
			try {
			  const user = await createUserWithEmailAndPassword(
				auth,
				userInput,
				passwordInput
			  );
			  navigateLogin();
			} catch (error) {
			  console.log(error);
			}
		};

		  register();

		}

		


	return (
		<>
        <div className={styles.titleContainer}>
            <div className={styles.titleDiv}>
            <h1 className={styles.title}> Olá,</h1>
            <p className={styles.subtitle}> Para continuar navegando de forma segura, registre-se na rede.</p>
            </div>
            <div className={styles.form}>
            <h2 className={styles.login}> Registre-se </h2>
			
            <RegisterEmail />
            <RegisterPassword />
			<div className={styles.registerOrLogin}> Já passui cadastro? <Link to='/'>Login</Link></div>
			<div className={styles.errorDiv}>
            <div className={classNames({
								[styles.errorMessage]: true,
								[styles.errorMessage__visible]: error
							})}>
								<div className={styles.error}>Ops, usuário ou senha inválidos. Tente novamente!</div>
								
							</div>
							</div>
            <button onClick={() => validate()} className={styles.btn}> Continuar </button>
			
            </div>
        </div>
		</>
	);
}