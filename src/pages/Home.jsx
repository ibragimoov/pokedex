import React from "react";
import { useEffect, useState, useContext } from "react";

import PokeCart from "../components/PokeCart";
import Pagination from "../components/Pagination";
import Skeleton from "../components/PokeCart/Skeleton";

import { SearchContext } from "../App";

const Home = () => {
    const [allPokemons, setAllPokemons] = useState([]);
    const [pokemons, setPokemons] = useState([]);
    const [currentUrl, setCurrentUrl] = useState(
        "https://pokeapi.co/api/v2/pokemon?limit=8"
    );
    const [nextUrl, setNextUrl] = useState("");
    const [prevUrl, setPrevUrl] = useState("");
    const { search } = useContext(SearchContext);

    const PokemonObjects = (data) => {
        setPokemons([]);
        data.forEach(async (pokemon) => {
            const res = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${pokemon.name}/`
            );
            const data = await res.json();
            setPokemons((prevPokemons) => [...prevPokemons, data]);
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

    const PokemonElements = pokemons.filter((pokemon) =>
        pokemon.name.includes(search)
    );

    const SkeletonElements = [...new Array(4)].map((_, index) => (
        <Skeleton key={index} />
    ));

    console.log(allPokemons);

    return (
        <>
            <Pagination
                gotoNextPage={nextUrl ? gotoNextPage : null}
                gotoPrevPage={prevUrl ? gotoPrevPage : null}
            />
            <div className="pokemon-wrapper">
                {PokemonElements.length
                    ? PokemonElements.map((pokemon) => (
                          <PokeCart
                              key={pokemon.order}
                              name={pokemon.name}
                              id={pokemon.id}
                              types={pokemon.types}
                              image={
                                  pokemon.sprites.other.dream_world
                                      .front_default
                              }
                          />
                      ))
                    : SkeletonElements}
            </div>
            {/* <button onClick={handlerLoad} className="load-btn">
                Load more
            </button> */}
        </>
    );
};

export default Home;
