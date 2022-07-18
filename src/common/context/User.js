import { createContext, useState } from 'react';

export const UserContext = createContext();
UserContext.displayName = "User";

export const UserProvider = ({ children }) => {
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(true);
    const [password, setPassword] = useState("");
    const [validPassword, setValidPassword] = useState(true);
    const [error, setError] = useState(false);
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
            setError
        }}>
            {children}
        </UserContext.Provider>
    )
}