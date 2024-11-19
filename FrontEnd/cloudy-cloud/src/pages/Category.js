import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import style from "./Category.module.css";
import Tile from "../components/Tile";

const Items = [
    {
        id: 1,
        name: "Phone 1",
        price: 100,
        img: "https://via.placeholder.com/400",
    },
    {
        id: 2,
        name: "Phone 2",
        price: 200,
        img: "https://via.placeholder.com/400",
    },
    {
        id: 3,
        name: "Phone 3",
        price: 300,
        img: "https://via.placeholder.com/400",
    },
    {
        id: 4,
        name: "Phone 4",
        price: 400,
        img: "https://via.placeholder.com/400",
    },
    {
        id: 5,
        name: "Phone 5",
        price: 500,
        img: "https://via.placeholder.com/400",
    },
    {
        id: 6,
        name: "Phone 6",
        price: 500,
        img: "https://via.placeholder.com/400",
    },
    {
        id: 7,
        name: "Phone 7",
        price: 500,
        img: "https://via.placeholder.com/400",
    },
];

const Category = () => {
    const location = useLocation();
    const [type, setType] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const type = params.get("type");
        setType(type.charAt(0).toUpperCase() + type.slice(1));
      }, [location.search]);

    return (
        <div>
            <Header />
            <h2>{type}</h2>

            <div className={style.categoryMainDiv} >
                {Items && Items.map((item) => (
                    <div className={style.categoryItem} key={item.id}>
                        <Tile infos={true} data={item} />
                    </div>
                ))}


            </div>
            <Footer />
        </div>
    );
};

export default Category;
