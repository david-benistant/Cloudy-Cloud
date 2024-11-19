import style from "./Tile.module.css";

import Bag from "../assets/Bag.svg";

const Tile = ({ infos, data }) => {
    return (
        <div className={style.tileMainDiv} style={{height: ( infos ? "500px" : "430px")}} >
            <div className={style.tile}>
                {data && data.img ? (
                    <img
                        className={style.tileRenderedImg}
                        src={data.img}
                        alt=""
                    />
                ) : (
                    <img className={style.tileWaitingImg} src={Bag} alt="" />
                )}
            </div>
            {infos && (
                <>
                    <p className={style.tileTitle}>{data.name}</p>
                    <p className={style.tilePrice}>{data.price}€</p>
                </>
            )}
        </div>
    );
};

export default Tile;
