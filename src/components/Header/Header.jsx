import React from "react";
import Style from "./Header.module.css";

const Header = () => {
    return(
        <header className={Style.header}>
            <div className={Style.logo}>
                <img src="https://iqonic.design/themes/socialv/html-dark/images/logo.png" alt="logo"/>
                <div>Cicada</div>
            </div>
            <div className={Style.reg_log_block}>
                <div className={Style.login}>Логин</div>
                <div className={Style.register}>Регистрация</div>
            </div>
        </header>
    );
};

export default Header;