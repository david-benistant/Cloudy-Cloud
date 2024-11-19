import style from "./Footer.module.css"

import Logo from "../assets/CloudyCloudLogo.svg";

const Footer = () => {
    return (
        <footer>
            <div className={style.leftFooter} >
                <div>
                    <h5>Shop</h5>
                    <p>Phone</p>
                    <p>Tablet</p>
                    <p>Laptop</p>
                    <p>Desktop</p>
                    <p>Hardware</p>
                </div>
                <div>
                    <h5>Brand</h5>
                    <p>About</p>
                    <p>News</p>
                    <p>Careers</p>
                    <p>Sustainability</p>
                </div>
                <div>
                    <h5>Orders</h5>
                    <p>Track or Return an Order</p>
                    <p>Delivery</p>
                    <p>Returns</p>
                </div>
                <div>
                    <h5>Customer Care</h5>
                    <p>Contact Us</p>
                    <p>FAQs</p>
                    <p>Student Discount</p>
                </div>
            </div>
            <div className={style.rightFooter} >
                <img src={Logo} alt="logo"/>
                <p>Cloudy-Cloud</p>
            </div>
        </footer>
    );
}

export default Footer;