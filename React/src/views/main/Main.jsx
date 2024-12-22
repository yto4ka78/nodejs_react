import Carousel from "../../UI/carousel/Carousel";
import React from "react";
import styles from "./main.module.scss";
import { Link } from "react-router-dom";
import bouqet from "../../assets/images/bouqet_1.jpg";
import flowers from "../../assets/images/flowers.png";
import map from "../../assets/images/map.png";

const Main = () => {
    return (
        <div>
            <Carousel />
            <div className={styles.main_flowersSection}>
                <div className={styles.main_flowersSection_title}>
                    <div>Наш букетный выбор</div>
                    <div>Узннайте нашу коллекцию цветов и подарков!</div>
                </div>
                <div className={styles.main_flowersSection_products}>
                    <div className={styles.main_product}>
                        <Link to="/">
                            <img src={bouqet} alt="" />
                        </Link>
                        <div>Букет роз</div>
                        <div>12000Тг - 15000Тг</div>
                        <button>Выбрать</button>
                    </div>
                    <div className={styles.main_product}>
                        <Link to="/">
                            <img src={bouqet} alt="" />
                        </Link>
                        <div>Букет роз</div>
                        <div>12000Тг - 15000Тг</div>
                        <button>Выбрать</button>
                    </div>
                    <div className={styles.main_product}>
                        <Link to="/">
                            <img src={bouqet} alt="" />
                        </Link>
                        <div>Букет роз</div>
                        <div>12000Тг - 15000Тг</div>
                        <button>Выбрать</button>
                    </div>
                    <div className={styles.main_product}>
                        <Link to="/">
                            <img src={bouqet} alt="" />
                        </Link>
                        <div>Букет роз</div>
                        <div>12000Тг - 15000Тг</div>
                        <button>Выбрать</button>
                    </div>
                    <div className={styles.main_product}>
                        <Link to="/">
                            <img src={bouqet} alt="" />
                        </Link>
                        <div>Букет розроз роз роз розроз роз роз </div>
                        <div>12000Тг - 15000Тг</div>
                        <button>Выбрать</button>
                    </div>
                </div>
                <div className={styles.main_flowersSection_divforallflowers}>
                    <button>Посмотреть все букеты</button>
                </div>
            </div>

            <div className={styles.main_contact_width}>
                <div className={styles.main_contact}>
                    <div className={styles.main_contact_firstdiv}>
                        <div>Наш инстаграм</div>
                        <a href="">@flowerAstana</a>
                    </div>
                    <div className={styles.main_contact_seconddiv}>
                        <div>Магазин</div>
                        <div>
                            Наш магазин работает с 9:00 до 18:00, с возможностью
                            учесть любое ваше пожелание касательно доставки
                            цветов.Оставьте комментарий к заказу или свяжитесь
                            напрямую с нами во телефону +77714661111
                        </div>
                        <a href="">ВЫБРАТЬ БУКЕТ</a>
                    </div>
                    <div className={styles.main_contact_thirddiv}>
                        <a href="https://2gis.kz/almaty/firm/9429940000797834/76.953608%2C43.263831?m=76.952625%2C43.262932%2F15.99">
                            <img src={map} alt="" />
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.main_descriptionSection}>
                <div>
                    <p>Наш цветочный магазин — это место, где цветы оживают</p>
                    <p>
                        принося радость и тепло в каждый дом. У нас вы найдете
                        широкий ассортимент свежих цветов: от нежных роз до
                        экзотических орхидей. Мы предлагаем красивые букеты на
                        все случаи жизни — от романтических свиданий до
                        корпоративных мероприятий. Каждый букет создается с
                        любовью и вниманием к деталям нашими опытными
                        флористами. Кроме того, у нас есть уникальные
                        композиции, комнатные растения и аксессуары для ухода за
                        ними. Мы доставляем цветы быстро и аккуратно, чтобы
                        каждый заказ стал настоящим праздником. Приходите, и мы
                        поможем выразить ваши чувства через цветы!
                    </p>
                </div>
                <div>
                    <img src={flowers} alt="photo" />
                </div>
            </div>
        </div>
    );
};

export default Main;
