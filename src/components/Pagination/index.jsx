import React from "react";

import styles from "./Pagination.module.scss";

const Pagination = ({ gotoNextPage, gotoPrevPage }) => {
    return (
        <div className={styles.root}>
            <h2 className="main_title">All pokemons</h2>
            <div className={styles.pagination_box}>
                {gotoPrevPage && (
                    <button
                        className={`${styles.page_btn} ${styles.prev_btn}`}
                        onClick={() => gotoPrevPage()}
                    >
                        Previous
                    </button>
                )}
                {gotoNextPage && (
                    <button
                        className={`${styles.page_btn} ${styles.next_btn}`}
                        onClick={() => gotoNextPage()}
                    >
                        Next
                    </button>
                )}
            </div>
        </div>
    );
};

export default Pagination;
