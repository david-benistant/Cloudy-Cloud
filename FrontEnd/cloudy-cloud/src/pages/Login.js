import { useNavigate } from "react-router-dom";
import style from "./Auth.module.css";
import { useState } from "react";
import urls from "../urls";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] =useState("");


    const login = async () => {

        const response = await fetch(`${urls.api}/login/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });
        if (response.status === 200) {
            const data = await response.json();
            localStorage.setItem("username", data.username);
            navigate("/");
        } else if (response.status === 404) {
            alert("Invalid credentials");
        }
    }

    return (
        <div className={style.mainDiv}>
            <div className={style.formDiv}>
                <h1 className={style.authHead} >Sign in</h1>
                <input className={style.authForm} type="email" onChange={(e) => {setEmail(e.target.value) }} placeholder="Email" />
                <input className={style.authForm} type="password" onChange={(e) => {setPassword(e.target.value) }} placeholder="Password" />
                <p className={style.authSwitch} >
                    <a href="/register">Sign up</a>
                </p>
                <button className={style.authFormButton} onClick={login} >Sign in</button>
            </div>
        </div>
    );
};

export default Login;
