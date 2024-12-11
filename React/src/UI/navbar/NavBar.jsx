import React from "react";
import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";
import phoneLogo from "../../assets/images/logo_phone.png";
import mailLogo from "../../assets/images/logo_mail.png";
import basketLogo from "../../assets/images/logo_basket.png";

const NavBar = () => {
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
                    <div>
                        <Link to="/account">Мой аккаунт</Link>
                    </div>
                    <div className={styles.NavBar_Main_Section1_rightParty_basket}>
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
