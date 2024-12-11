import React from "react";
import flower_1 from "../../assets/images/flower_1.jpg";
import flower_2 from "../../assets/images/flower_2.jpg";
import flower_3 from "../../assets/images/flower_3.jpg";
import { Link } from "react-router-dom";

const Carousel = () => {
    return (
        <div
            id="carouselExample"
            className="carousel slide carousel_custom"
            data-bs-ride="carousel"
        >
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div> Собрать букет исходя из ваших предпочтений</div>
                    <Link to="/">Попробовать</Link>
                    <img src={flower_1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <div> Собрать букет исходя из ваших предпочтений</div>
                    <Link to="/">Попробовать</Link>
                    <img src={flower_2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <div> Собрать букет исходя из ваших предпочтений</div>
                    <Link href="/">Попробовать</Link>
                    <img src={flower_3} className="d-block w-100" alt="..." />
                </div>
            </div>

            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;
