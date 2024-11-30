import style from "./Tile.module.css";

import Bag from "../assets/Bag.svg";

import ItemDetail from "./ItemDetail";

import { useState } from "react";

const Tile = ({ infos, data }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div
                className={style.tileMainDiv}
                style={{ height: infos ? "500px" : "430px" }}
                onClick={() => setOpen(true)}
            >
                <div className={style.tile}>
                    {data && data.img ? (
                        <img
                            className={style.tileRenderedImg}
                            src={data.img}
                            alt=""
                        />
                    ) : (
                        <img
                            className={style.tileWaitingImg}
                            src={Bag}
                            alt=""
                        />
                    )}
                </div>
                {infos && (
                    <>
                        <p className={style.tileTitle}>{data.name}</p>
                        <p className={style.tilePrice}>{data.price}€</p>
                    </>
                )}
            </div>
            <ItemDetail open={open} setOpen={setOpen} item={data} />
        </>
    );
};

export default Tile;
