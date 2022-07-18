import { createContext, useState, useEffect, useContext } from 'react';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
  } from "firebase/auth";
  import { auth } from "../../firebase-config";

export const UserContext = createContext();
UserContext.displayName = "User";

export const UserProvider = ({ children }) => {
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(true);
    const [password, setPassword] = useState("");
    const [validPassword, setValidPassword] = useState(true);
    const [error, setError] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [pending, setPending] = useState(true);

    useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			setCurrentUser(currentUser);
		});
	
	}, [])


    return (
        <UserContext.Provider value={ {
            email, 
            setEmail, 
            validEmail,
            setValidEmail,
            password, 
            setPassword,
            validPassword,
            setValidPassword,
            error, 
            setError,
            currentUser,
            setCurrentUser
        }}>
            {children}
        </UserContext.Provider>
    )

}

export function useUserAuth() {
    return useContext(UserContext);
  }

