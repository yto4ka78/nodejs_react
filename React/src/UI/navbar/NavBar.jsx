import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";
import phoneLogo from "../../assets/images/logo_phone.png";
import mailLogo from "../../assets/images/logo_mail.png";
import basketLogo from "../../assets/images/logo_basket.png";
import { getUserFromToken } from "../../utils/getUser";
import axios from "axios";

const NavBar = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const user = getUserFromToken();
        setUser(user);
    }, []);

    const handleLogout = async () => {
        try {
                localStorage.removeItem("token");
                window.location.href = "/";
        } catch {
            console.log("Ошибка в реакт CATCH");
        }
    };
    return (
        <div className={styles.NavBar_Main}>
            <div className={styles.NavBar_Main_Section0}>
                <div>Доставка по всей Алматинской области</div>
            </div>
            <div className={styles.NavBar_Main_Section1}>
                <div className={styles.NavBar_Main_Section1_leftParty}>
                    <div>
                        <img src={phoneLogo} alt="" />
                        +77714661111
                    </div>
                    <div>
                        {" "}
                        <img src={mailLogo} alt="" />
                        erik.sitnikov.fr@gmail.com
                    </div>
                </div>
                <div className={styles.NavBar_Main_Section1_centralParty}>
                    <div>ЦВЕТОЧНЫЙ ДОМ</div>
                    <div>Алматинской области</div>
                </div>
                <div className={styles.NavBar_Main_Section1_rightParty}>
                    {user ? (
                        <div className={styles.dropdown}>
                            <button className={styles.dropbtn}>Профиль</button>
                            <div className={styles.dropdownContent}>
                                <Link to="/account">Мой аккаунт</Link>
                                <Link to="/settings">Настройки</Link>
                                <Link
                                    to="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleLogout();
                                    }}
                                >
                                    Выйти
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div className={styles.link_toConnexion}>
                            <Link to="/registration" className="">
                                Войти
                            </Link>
                        </div>
                    )}
                    <div
                        className={
                            styles.NavBar_Main_Section1_rightParty_basket
                        }
                    >
                        <div>0 Тг.</div>
                        <div>
                            0 <img src={basketLogo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.NavBar_Main_Section2}>
                <div>
                    <Link to="">Праздники</Link>
                </div>
                <div>
                    <Link to="">Близким</Link>
                </div>
                <div>
                    <Link to="">Романтический подарок</Link>
                </div>
                <div>
                    <Link to="">Украшения</Link>
                </div>
                <div>
                    <Link to="">Отзывы</Link>
                </div>
                <div>
                    <Link to="">Контакты</Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
