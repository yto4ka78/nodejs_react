import React from "react";
import styles from "../../views/main/main.module.scss";
import { Link } from "react-router-dom";

const ProductMaim = () => {
    return (
        <div className={styles.main_product}>
            <Link to="/">
                <img src={bouqet} alt="" />
            </Link>
            <div>Букет роз</div>
            <div>12000Тг - 15000Тг</div>
            <button>Выбрать</button>
        </div>
    );
};
