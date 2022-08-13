import React from "react";

import styles from "./NotFound.module.scss";

const NotFoundBlock = () => {
    return (
        <div className={styles.root}>
            <h1>ERROR 404! POKEMON NOT FOUND</h1>
            <p>Try to search another pokemon</p>
            <img src="./not_found.png" alt="not_found_page" />
        </div>
    );
};

export default NotFoundBlock;
