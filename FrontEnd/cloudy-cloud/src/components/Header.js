import style from "./Header.module.css";
import Logo from "../assets/CloudyCloudLogo.svg";
import Search from "../assets/SearchIcon.svg";
import Cart from "../assets/Cart.svg";
import User from "../assets/User.svg";
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    const handleKeyDownSearch = (e) => {
        if (e.key === "Enter" && search.length > 0) {
            navigate("/search?search=" + search);
        }
    };
    return (
        <div className={style.headerMainDiv}>
            <div className={style.logoHeader} onClick={() => navigate("/")}>
                <img src={Logo} alt="" />
                <p>Cloudy-Cloud</p>
            </div>
            <div className={style.headerItems}>
                <div className={style.headerSideObjects}>
                    <SideBar>
                        <div className={style.hearderBurgerButton}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </SideBar>
                </div>
                <div className={style.headerInput}>
                    <input
                        type="text"
                        placeholder="Search"
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                        onKeyDown={handleKeyDownSearch}
                    />
                    <div
                        onClick={
                            search.length > 0
                                ? () => {
                                      navigate("/search?search=" + search);
                                  }
                                : undefined
                        }
                    >
                        <img src={Search} alt="" />
                    </div>
                </div>
                <div className={style.headerSideObjects}>
                    <div className={style.headerIcons}>
                        <img src={Cart} alt="Cart" />
                        <img
                            src={User}
                            alt="User"
                            onClick={() => {
                                navigate("/account");
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
