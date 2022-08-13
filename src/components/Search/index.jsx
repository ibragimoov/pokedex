import React from "react";
import { useContext } from "react";

import styles from "./Search.module.scss";

import { SearchContext } from "../../App";

export const Search = () => {
    const { search, setSearch } = useContext(SearchContext);

    return (
        <div className={styles.search}>
            <img
                className={styles.search__icon}
                src="./search-icon.png"
                alt="search"
            />
            <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className={styles.search__input}
                placeholder="Search. . ."
            />
        </div>
    );
};
