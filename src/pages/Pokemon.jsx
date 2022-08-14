import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20 36.6667C29.2048 36.6667 36.6667 29.2047 36.6667 20C36.6667 10.7952 29.2048 3.33333 20 3.33333C10.7953 3.33333 3.33337 10.7952 3.33337 20C3.33337 29.2047 10.7953 36.6667 20 36.6667Z"
                                stroke="black"
                                strokeWidth="2"
                            />
                            <path
                                d="M22.5 13.3333L15.8334 20L22.5 26.6667"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
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
