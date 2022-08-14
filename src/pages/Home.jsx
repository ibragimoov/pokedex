import React from "react";
import { useEffect, useState, useContext } from "react";

import PokeCart from "../components/PokeCart";

import { SearchContext } from "../App";

const Home = () => {
    const [allPokemons, setAllPokemons] = useState([]);
    const [loadMore, setLoadMore] = useState(
        "https://pokeapi.co/api/v2/pokemon?limit=20"
    );
    const { search } = useContext(SearchContext);

    const getPokemons = async () => {
        const res = await fetch(loadMore);
        const data = await res.json();

        setLoadMore(data.next);

        const PokemonObjects = (data) => {
            data.forEach(async (pokemon) => {
                const res = await fetch(
                    `https://pokeapi.co/api/v2/pokemon/${pokemon.name}/`
                );
                const data = await res.json();
                setAllPokemons((prevPokemons) => [...prevPokemons, data]);
            });
        };

        PokemonObjects(data.results);
    };

    function handlerLoad() {
        getPokemons();
    }

    useEffect(() => {
        getPokemons();
    }, []);

    const PokemonElements = allPokemons.filter((pokemon) =>
        pokemon.name.includes(search)
    );

    return (
        <>
            <h2 className="main_title">All pokemons</h2>
            <div className="pokemon-wrapper">
                {PokemonElements.length > 0 &&
                    PokemonElements.map((pokemon) => (
                        <PokeCart
                            key={pokemon.order}
                            name={pokemon.name}
                            id={pokemon.id}
                            types={pokemon.types}
                            image={
                                pokemon.sprites.other.dream_world.front_default
                            }
                        />
                    ))}
            </div>
            <button onClick={handlerLoad} className="load-btn">
                Load more
            </button>
            {/* {PokemonElements.length === 0 && (
                <div className="not-found">
                    <NotFound />
                </div>
            )} */}
        </>
    );
};

export default Home;
