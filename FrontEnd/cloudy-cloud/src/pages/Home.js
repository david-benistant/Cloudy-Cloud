// import SideBar from "../components/SideBar";
import Header from "../components/Header";
import Tile from "../components/Tile";
import Carousel from "../components/Carousel";
import "./Home.module.css";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <Header />

            <h2>Top Picks</h2>
            <Carousel items={4} >
                <Tile infos={false} data={{img : "https://m.media-amazon.com/images/I/51iqNCsBs6L._AC_SL1500_.jpg"}}/>
                <Tile infos={false} data={{img : "https://m.media-amazon.com/images/I/51PybnYLtuL._AC_SL1500_.jpg"}}/>
                <Tile infos={false} data={{img : "https://m.media-amazon.com/images/I/61iyTabRqIL._SL1500_.jpg"}}/>
                <Tile infos={false} data={{img : "https://m.media-amazon.com/images/I/71bzJu2pQiL._AC_SL1500_.jpg"}}/>
                <Tile infos={false} data={{img : "https://m.media-amazon.com/images/I/71orqjVXJIL._AC_SL1500_.jpg"}}/>
                <Tile infos={false} data={{img : "https://m.media-amazon.com/images/I/51uy8gOG-iL._AC_SL1400_.jpg"}}/>
            </Carousel>

            <h2>Sale</h2>
            <Carousel items={4} >
                <Tile infos={false} data={{img : "https://m.media-amazon.com/images/I/61WUSYIQdKL._AC_SL1500_.jpg"}}/>
                <Tile infos={false} data={{img : "https://m.media-amazon.com/images/I/419yjKznzbL._AC_.jpg"}}/>
                <Tile infos={false} data={{img : "https://m.media-amazon.com/images/I/712TY0NCErL._AC_SL1114_.jpg"}}/>
                <Tile infos={false} data={{img : "https://m.media-amazon.com/images/I/71vFKBpKakL._AC_SL1500_.jpg"}}/>
                <Tile infos={false} data={{img : "https://m.media-amazon.com/images/I/51aXvjzcukL._AC_SL1500_.jpg"}}/>
                <Tile infos={false} data={{img : "https://m.media-amazon.com/images/I/61bwiPRcv2L._AC_SL1500_.jpg"}}/>
                <Tile infos={false} data={{img : "https://m.media-amazon.com/images/I/715zWolPNVL._AC_SL1500_.jpg"}}/>
            </Carousel>
            <Footer />
        </div>
    );

}

export default Home;