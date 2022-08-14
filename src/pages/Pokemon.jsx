import React from "react";
import { useParams } from "react-router-dom";

const Pokemon = () => {
    const { id } = useParams();

    return (
        <div>
            <div>
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
                <img src="../not_found.png" alt="pokemon" />
                <h1>Pikachu</h1>
            </div>
            <div>
                <h4>electronic</h4>
                <div>
                    <label htmlFor="file">HP</label>
                    <progress id="file" max="100" value="70">
                        {" "}
                        70%{" "}
                    </progress>

                    <label htmlFor="file">Attack</label>

                    <progress id="file" max="100" value="30">
                        {" "}
                        70%{" "}
                    </progress>

                    <label htmlFor="file">Deffence</label>

                    <progress id="file" max="100" value="50">
                        {" "}
                        70%{" "}
                    </progress>

                    <label htmlFor="file">Speed</label>

                    <progress id="file" max="100" value="20">
                        {" "}
                        70%{" "}
                    </progress>
                </div>
            </div>
        </div>
    );
};

export default Pokemon;
