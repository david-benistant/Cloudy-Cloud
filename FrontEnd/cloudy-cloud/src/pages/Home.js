// import SideBar from "../components/SideBar";
import Header from "../components/Header";
import Tile from "../components/Tile";
import Carousel from "../components/Carousel";
import "./Home.module.css";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import urls from "../urls";

const Home = () => {
    const [datas, setDatas] = useState(null);
    const [topPicks, setTopPicks] = useState([]);
    const [sales, setSales] = useState([]);

    const fetchData = async () => {
        const response = await fetch(`${urls.api}/items/`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        setDatas(data);
    };

    useEffect(() => {
        if (datas) {
            setTopPicks(
                datas.sort((a, b) => b.nb_sales - a.nb_sales).slice(0, 10)
            );
            setSales(
                datas
                    .sort(
                        (a, b) =>
                            new Date(b.created_at) - new Date(a.created_at)
                    )
                    .slice(0, 10)
            );
        }
        if (!datas) {
            fetchData();
        }
    }, [datas]);

    return (
        <div>
            <Header />


            { localStorage.getItem('username') ?  <h2>Hello, {localStorage.getItem('username')}</h2> : null }
            <h2>Top Picks</h2>
            <Carousel items={4}>
                {topPicks.map((data) => (
                    <Tile key={data.id} infos={false} data={data} />
                ))}
            </Carousel>

            <h2>Sale</h2>
            <Carousel items={4}>
                {sales.map((data) => (
                    <Tile key={data.id} infos={false} data={data} />
                ))}
            </Carousel>
            <Footer />
        </div>
    );
};

export default Home;
