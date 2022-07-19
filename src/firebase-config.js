import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//deveria estar em um arquivo .env
const firebaseConfig = {
    apiKey: "AIzaSyDtuMJQkihZZ_c-de51GhjbQvKU-heB9VY",
    authDomain: "auth-dev-4e4eb.firebaseapp.com",
    projectId: "auth-dev-4e4eb",
    storageBucket: "auth-dev-4e4eb.appspot.com",
    messagingSenderId: "854797508781",
    appId: "1:854797508781:web:56b9c32f40e5a4a139e624"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);