import styles from "./Login.module.scss";
import { useNavigate, Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../common/context/User";
import classNames from "classnames";
import LoginEmail from "../input/user/login";
import LoginPassword from "../input/password/login";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
  } from "firebase/auth";
  import { auth } from "../../firebase-config";

export default function Login() {
	const navigate = useNavigate();
	const { validEmail, validPassword } = useContext(UserContext);
	const [error, setError] = useState(false);
	const [registerEmail, setRegisterEmail] = useState("");
	const [registerPassword, setRegisterPassword] = useState("");
	const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");
	const [user, setUser] = useState({});

	
	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			//@ts-ignore
			setUser(currentUser);
		});
	
	}, [])


	function navigateToMain() {
		navigate("/main");
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

		const login = async () => {
			try {
			  const user = await signInWithEmailAndPassword(
				auth,
				userInput,
				passwordInput
			  );
		navigateToMain();
			} catch (error) {
				setError(true);
			}
		  };
		  login();
		}
		
	return (
		<>
        <div className={styles.titleContainer}>
            <div className={styles.titleDiv}>
            <h1 className={styles.title}> Olá,</h1>
            <p className={styles.subtitle}> Para continuar navegando de forma segura, efetue o login na rede.</p>
            </div>
            <div className={styles.form}>
            <h2 className={styles.login}> Login </h2>
            <LoginEmail />
            <LoginPassword />
			<div className={styles.registerOrLogin}> Não passui cadastro? <Link className={styles.link} to='/register'>Registre-se</Link></div>
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