import React from "react";

import styles from "./Pagination.module.scss";

const Pagination = ({ gotoNextPage, gotoPrevPage }) => {
    return (
        <div className={styles.root}>
            {gotoPrevPage && (
                <button
                    className={styles.page_btn}
                    onClick={() => gotoPrevPage()}
                >
                    Previous
                </button>
            )}
            <h2 className="main_title">All pokemons</h2>
            {gotoNextPage && (
                <button
                    className={styles.page_btn}
                    onClick={() => gotoNextPage()}
                >
                    Next
                </button>
            )}
        </div>
    );
};

export default Pagination;
