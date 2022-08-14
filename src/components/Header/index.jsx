import React from "react";
import { Link, useLocation } from "react-router-dom";

import { Search } from "../Search";

import styles from "./Header.module.scss";

const Header = () => {
    const location = useLocation();

    return (
        <div className={styles.nav__root}>
            <Link to="/">
                <img
                    className={styles.nav__logo}
                    src="../logo.png"
                    alt="logo"
                />
            </Link>
            {!location.pathname.includes("/pokemon") && <Search />}
        </div>
    );
};

export default Header;
