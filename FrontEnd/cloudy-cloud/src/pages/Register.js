import style from "./Auth.module.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    return (
        <div className={style.mainDiv}>
            <div className={style.formDiv}>
                <h1 className={style.authHead} >Sign up</h1>
                <input className={style.authForm} type="email" placeholder="Email" />
                <input className={style.authForm} type="password" placeholder="Password" />
                <input className={style.authForm} type="password" placeholder="Confirm Password" />
                <p className={style.authSwitch} >
                    <a href="/login">Sign in</a>
                </p>
                <button className={style.authFormButton} onClick={() => {navigate("/")}} >Sign up</button>
            </div>
        </div>
    );
};

export default Register;
