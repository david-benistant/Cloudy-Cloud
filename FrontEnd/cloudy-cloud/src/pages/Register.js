import { useState } from "react";
import style from "./Auth.module.css";
import { useNavigate } from "react-router-dom";
import urls from "../urls";

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const register = async () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        const response = await fetch(`${urls.api}/register/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
                username: username,
            }),
        });
        if (response.status === 200) {
            const data = await response.json();
            localStorage.setItem("username", data.username);
            navigate("/");
        } else if (response.status === 409) {
            alert("User already exists");
        }
    };

    return (
        <div className={style.mainDiv}>
            <div className={style.formDiv}>
                <h1 className={style.authHead}>Sign up</h1>
                <input
                    className={style.authForm}
                    type="email"
                    placeholder="Email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <input
                    className={style.authForm}
                    type="text"
                    placeholder="Username"
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                />
                <input
                    className={style.authForm}
                    type="password"
                    placeholder="Password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <input
                    className={style.authForm}
                    type="password"
                    placeholder="Confirm Password"
                    onChange={(e) => {
                        setConfirmPassword(e.target.value);
                    }}
                />
                <p className={style.authSwitch}>
                    <a href="/login">Sign in</a>
                </p>
                <button
                    className={style.authFormButton}
                    onClick={register}
                >
                    Sign up
                </button>
            </div>
        </div>
    );
};

export default Register;
