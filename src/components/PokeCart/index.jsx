import React from "react";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

import styles from "./PokeCard.module.scss";

const PokeCart = ({ id, name, image, types }) => {
    let style = types[0].type.name;

    return (
        <Link to={`pokemon/${id}`} style={{ textDecoration: "none" }}>
            <div className={styles.pokecart}>
                <div className={styles.pokecart__box}>
                    <h4 className={styles.pokecart__name}>{name}</h4>
                    <h4 className={styles.pokecart__order}>#0{id}</h4>
                </div>
                <div className={styles.pokecart__info}>
                    <img
                        src={image}
                        className={styles.pokecart__img}
                        alt="pokemon"
                    />
                    <div className={styles.pokecart__types__box}>
                        {types.map((type) => (
                            <h5 className={style} key={nanoid()}>
                                {type.type.name}
                            </h5>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default PokeCart;
