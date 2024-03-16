'use client'

import {
  useState,
} from "react";
import useLocalStorage from "../../custom-lib/hooks/use-local-storage";
import LoginData from "@/app/types/LoginData";
import {loginUser} from "@/app/api/auth";
import "./login.css";
import {useRouter} from 'next/navigation';

const LoginForm = ({}: {}) => {
  const [loginData, setLoginData] = useState<any>(null);
  const [token, setToken] = useLocalStorage('token', '');
  const router = useRouter();

  const handleSignIn = async (e: any) => {
    e.preventDefault();
    try {
      const loginResponse: { access_token: string | null, bearer: string | null} = await loginUser(loginData);
      if (loginResponse.access_token !== null && loginResponse.access_token !== undefined) {
        const loginResponse = await loginUser(loginData);
        setToken(loginResponse.access_token);
        window.location.reload();
      } else {
        console.error('Login failed:', loginResponse);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  }

  return (
    <>
      <div className="logintitle">
        <h1>Connexion</h1>
      </div>
      <form className="loginform h-screen" action="" onSubmit={(e) => handleSignIn(e)}>
        <label className="loginform_label">Email</label>
        <input type='email' name='email' placeholder='Email' required
               onChange={(e) => setLoginData({...loginData, email: e.target.value})}/>
        <label className="loginform_label">Mot de passe</label>
        <input type='password' name='password' placeholder='password' required
               onChange={(e) => setLoginData({...loginData, password: e.target.value})}/>
        <button className="text-black">Connexion</button>
      </form>
    </>
  );
};

export default LoginForm;
