import React from "react";
import Style from "./Header.module.css";

const Header = () => {
    return(

        <header>
            <img className={Style.logo} src="https://avatars.mds.yandex.net/get-pdb/933338/94068ff5-61aa-43bd-909a-a47aade07a8b/s1200?webp=false" alt="logo"/>
        </header>
    );
};

export default Header;