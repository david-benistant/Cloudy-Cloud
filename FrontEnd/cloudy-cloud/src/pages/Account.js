import Footer from "../components/Footer";
import Header from "../components/Header";
import style from "./Account.module.css";

import Orders from "../assets/Orders.svg";
import Security from "../assets/Security.svg";
import Home from "../assets/Home.svg";
import Card from "../assets/Card.svg";
import Customer from "../assets/Customer.svg";

const Boxs = [
    {
        icon: Orders,
        text: "Your orders",
    },
    {
        icon: Security,
        text: "Login & Security",
    },
    {
        icon: Home,
        text: "Your addresses",
    },
    {
        icon: Card,
        text: "Your payments",
    },
    {
        icon: Customer,
        text: "Customer service",
    },
];

const Box = ({ icon, text, onClick }) => {
    return (
        <div className={style.box} onClick={onClick}>
            <div>
                <img src={icon} alt="" />
            </div>
            <p>{text}</p>
        </div>
    );
};

const Account = () => {
    return (
        <div>
            <Header />
            <h2>Your Account</h2>

            <div className={style.boxsContainer}>
                {Boxs.map((box, index) => (
                    <div>
                        <Box key={index} icon={box.icon} text={box.text} />
                    </div>
                ))}
                {/* <Box icon={Orders} text="Your orders" /> */}
            </div>
            <Footer />
        </div>
    );
};

export default Account;
