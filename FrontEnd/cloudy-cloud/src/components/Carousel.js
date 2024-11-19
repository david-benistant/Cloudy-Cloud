import style from "./Carousel.module.css";
import React from "react";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Carousel = ({ children, items }) => {
    const [current, setCurrent] = React.useState(0);
    const childrenArray = React.Children.toArray(children);

    const decreaseCurrent = () => {
        if (current > 0) {
            setCurrent(current - 1);
        }
    };

    const increaseCurrent = () => {
        if (current + items < childrenArray.length) {
            setCurrent(current + 1);
        }
    };

    const offset = -(current * (100 / items));

    return (
        <div className={style.carouselMainDiv}>
            <div
                className={current > 0 ? style.arrow : style.arrowDisabled}
                onClick={decreaseCurrent}
            >
                <ArrowBackIosNewIcon fontSize="large" />
            </div>
            <div className={style.carouselOuterDiv}>
                <div
                    className={style.carouselInnerDiv}
                    style={{
                        transform: `translateX(${offset}%)`,
                        transition: "transform 0.5s ease-in-out",
                    }}
                >
                    {childrenArray.map((child, index) => (
                        <div
                            className={style.carouselElement}
                            key={index}
                            style={{ minWidth: `${100 / items}%` }}
                        >
                            {child}
                        </div>
                    ))}
                </div>
            </div>
            <div
                className={
                    current + items < childrenArray.length
                        ? style.arrow
                        : style.arrowDisabled
                }
                onClick={increaseCurrent}
            >
                <ArrowForwardIosIcon fontSize="large" />
            </div>
        </div>
    );
};

export default Carousel;
