import style from "./Auth.module.css";

const Login = () => {
    return (
        <div className={style.mainDiv}>
            <div className={style.formDiv}>
                <h1 className={style.authHead} >Sign in</h1>
                <input className={style.authForm} type="email" placeholder="Email" />
                <input className={style.authForm} type="password" placeholder="Password" />
                <p className={style.authSwitch} >
                    <a href="/register">Sign up</a>
                </p>
                <button className={style.authFormButton} >Sign in</button>
            </div>
        </div>
    );
};

export default Login;
