import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Pokemon = () => {
    const { id } = useParams();
    const [pokemonInfo, setPokemonInfo] = useState();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) => res.json())
            .then((data) => setPokemonInfo(data));
    }, [id]);

    return (
        <div className="pokemon-root">
            {pokemonInfo !== undefined && (
                <div className="pokemon-card">
                    <div className="pokemon-left">
                        <Link to={"/"}>
                            <svg
                                width="36"
                                height="36"
                                viewBox="0 0 36 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18 34.6667C27.2048 34.6667 34.6667 27.2047 34.6667 18C34.6667 8.79525 27.2048 1.33333 18 1.33333C8.79529 1.33333 1.33337 8.79525 1.33337 18C1.33337 27.2047 8.79529 34.6667 18 34.6667Z"
                                    stroke="black"
                                    strokeWidth="2"
                                />
                                <path
                                    d="M20.5 11.3333L13.8334 18L20.5 24.6667"
                                    stroke="black"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Link>

                        <div className="pokemon-left-info">
                            <img
                                src={
                                    pokemonInfo.sprites.other.dream_world
                                        .front_default
                                }
                                alt="pokemon"
                            />
                            <h1>{pokemonInfo.name}</h1>
                        </div>
                    </div>
                    <div className="pokemon-right">
                        {/* <h4>electronic</h4> */}
                        <div className="pokemon-stats">
                            <div className="stats-left">
                                <label htmlFor="file">HP</label>
                                <label htmlFor="file">Attack</label>
                                <label htmlFor="file">Deffense</label>
                                <label htmlFor="file">Speed</label>
                            </div>
                            <div className="stats-right">
                                <progress
                                    className="hp"
                                    id="file"
                                    max="100"
                                    value={pokemonInfo.stats[0].base_stat}
                                >
                                    {" "}
                                    70%{" "}
                                </progress>
                                <br />
                                <progress
                                    className="attack"
                                    id="file"
                                    max="100"
                                    value={pokemonInfo.stats[1].base_stat}
                                >
                                    {" "}
                                    70%{" "}
                                </progress>
                                <br />
                                <progress
                                    className="deffense"
                                    id="file"
                                    max="100"
                                    value={pokemonInfo.stats[2].base_stat}
                                >
                                    {" "}
                                    70%{" "}
                                </progress>
                                <br />
                                <progress
                                    className="speed"
                                    id="file"
                                    max="100"
                                    value={pokemonInfo.stats[5].base_stat}
                                >
                                    {" "}
                                    70%{" "}
                                </progress>
                                <br />
                            </div>
                        </div>
                        <h4 className="pokemon-order">#0{pokemonInfo.order}</h4>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Pokemon;
