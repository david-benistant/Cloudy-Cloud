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
                <Tile infos={false} data={{img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxljCiU3pRUXpw-39aklTNk7BDV3G9Dn7ocw&s"}}/>
                <Tile infos={false} data={{img : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"}}/>
                <Tile infos={false} data={{img : "https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649"}}/>
                <Tile infos={false} data={{img : "https://i0.wp.com/picjumbo.com/wp-content/uploads/amazing-stone-path-in-forest-free-image.jpg?w=600&quality=80"}}/>
                <Tile infos={false} data={{img : "https://i0.wp.com/picjumbo.com/wp-content/uploads/autumn-wallpaper-free-image.jpg?w=600&quality=80"}}/>
                <Tile infos={false} data={{img : "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg"}}/>
                <Tile infos={false} data={{img : "https://th.bing.com/th/id/OIG2.9O4YqGf98tiYzjKDvg7L"}}/>
            </Carousel>

            <h2>Sale</h2>
            <Carousel items={4} >
                <Tile infos={false} data={{img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxljCiU3pRUXpw-39aklTNk7BDV3G9Dn7ocw&s"}}/>
                <Tile infos={false} data={{img : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"}}/>
                <Tile infos={false} data={{img : "https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649"}}/>
                <Tile infos={false} data={{img : "https://i0.wp.com/picjumbo.com/wp-content/uploads/amazing-stone-path-in-forest-free-image.jpg?w=600&quality=80"}}/>
                <Tile infos={false} data={{img : "https://i0.wp.com/picjumbo.com/wp-content/uploads/autumn-wallpaper-free-image.jpg?w=600&quality=80"}}/>
                <Tile infos={false} data={{img : "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg"}}/>
                <Tile infos={false} data={{img : "https://th.bing.com/th/id/OIG2.9O4YqGf98tiYzjKDvg7L"}}/>
            </Carousel>
            <Footer />
        </div>
    );

}

export default Home;