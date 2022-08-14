import React from "react";
import { useEffect, useState, useContext } from "react";

import PokeCart from "../components/PokeCart";
import Pagination from "../components/Pagination";

import { SearchContext } from "../App";

const Home = () => {
    const [allPokemons, setAllPokemons] = useState([]);
    const [currentUrl, setCurrentUrl] = useState(
        "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
    );
    const [nextUrl, setNextUrl] = useState("");
    const [prevUrl, setPrevUrl] = useState("");
    const { search } = useContext(SearchContext);

    const PokemonObjects = (data) => {
        setAllPokemons([]);
        data.forEach(async (pokemon) => {
            const res = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${pokemon.name}/`
            );
            const data = await res.json();
            setAllPokemons((prevPokemons) => [...prevPokemons, data]);
        });
    };

    const getPokemons = async () => {
        const res = await fetch(currentUrl);
        const data = await res.json();

        setNextUrl(data.next);
        setPrevUrl(data.previous);

        PokemonObjects(data.results);
    };

    const gotoNextPage = () => setCurrentUrl(nextUrl);
    const gotoPrevPage = () => setCurrentUrl(prevUrl);

    useEffect(() => {
        getPokemons();
    }, [currentUrl]);

    const PokemonElements = allPokemons.filter((pokemon) =>
        pokemon.name.includes(search)
    );

    return (
        <>
            <Pagination
                gotoNextPage={nextUrl ? gotoNextPage : null}
                gotoPrevPage={prevUrl ? gotoPrevPage : null}
            />
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
            {/* <button onClick={handlerLoad} className="load-btn">
                Load more
            </button> */}
        </>
    );
};

export default Home;
