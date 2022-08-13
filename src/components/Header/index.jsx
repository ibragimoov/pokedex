import React from "react";
import { Link } from "react-router-dom";

import { Search } from "../Search";

import styles from "./Header.module.scss";

const Header = () => {
    return (
        <div className={styles.nav__root}>
            <Link to="/">
                <img className={styles.nav__logo} src="./logo.png" alt="logo" />
            </Link>
            <Search />
        </div>
    );
};

export default Header;
