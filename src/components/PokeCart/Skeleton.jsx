import React from "react";
import ContentLoader from "react-content-loader";

import styles from "./PokeCard.module.scss";

const Skeleton = () => (
    <ContentLoader
        className={styles.pokecart}
        speed={2}
        // width={250}
        // height={250}
        viewBox="0 0 250 250"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="0" y="0" rx="20" ry="20" width="250" height="250" />
    </ContentLoader>
);

export default Skeleton;
