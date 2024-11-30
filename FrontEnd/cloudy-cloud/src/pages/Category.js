import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import style from "./Category.module.css";
import Tile from "../components/Tile";
import urls from "../urls";

const Category = () => {
    const location = useLocation();
    const [type_, setType] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${urls.api}/${type_}/`, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            setData(
                JSON.parse(data.data).map((item) => {
                    return { ...item.fields, id: Math.random() };
                })
            );
        };

        const params = new URLSearchParams(location.search);
        const type = params.get("type");
        setType(type);

        if (type !== type_) {
            setData(null);
        }
        if (!data && type === type_) {
            fetchData();
        }

    }, [location.search, data, type_]);

    return (
        <div>
            <Header />
            <h2>
                {type_ ? type_.charAt(0).toUpperCase() + type_.slice(1) : ""}
            </h2>

            <div className={style.categoryMainDiv}>
                {data &&
                    data.map((item) => (
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
