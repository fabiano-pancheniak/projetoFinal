import styles from "./Login.module.scss";
import { useNavigate, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../common/context/User";
import classNames from "classnames";
import EmailInput from "../input/user";
import InputPassword from "../input/password";

export default function Login() {
	const navigate = useNavigate();
	const { validEmail, validPassword } = useContext(UserContext);
	const [error, setError] = useState(false);

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
		console.log('enviar form')
		const payload = {
			email: userInput, 
			password: passwordInput
		};
		console.log(payload)

		fetch('http://127.0.0.1:3000/api/user', {
        method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		  },
        body: JSON.stringify(payload)
		})
		.then(res => res.json())
		navigateToMain();
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
            <EmailInput />
            <InputPassword />
			<div className={styles.registerOrLogin}> Não passui cadastro? <Link to='/register'>Registre-se</Link></div>
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