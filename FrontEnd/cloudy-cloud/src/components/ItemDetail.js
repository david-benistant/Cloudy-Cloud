import { Modal } from "antd";

import style from "./ItemDetail.module.css";

const ItemDetail = ({ open, setOpen, item }) => {
    return (
        <Modal
            open={open}
            onCancel={() => {
                setOpen(false);
            }}
            footer={[]}
            width={"50vw"}
        >
            <div className={style.itemMainDiv} >

                <div className={style.itemImg} >
                    <img src={item.img} alt="" />
                </div>
                <div className={style.itemInfos}>
                    <h3 className={style.itemName} >{item.name}</h3>
                    <p className={style.itemPrice} >{item.price}€</p>
                    <p className={style.itemDescription }>{item.description}</p>
                </div>

            </div>
        </Modal>
    );
};

export default ItemDetail;
