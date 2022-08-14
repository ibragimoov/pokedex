import "./App.scss";

import { Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Pokemon from "./pages/Pokemon";

export const SearchContext = createContext();

function App() {
    const [search, setSearch] = useState("");

    return (
        <div className="App">
            <SearchContext.Provider value={{ search, setSearch }}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="pokemon/:id" element={<Pokemon />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </SearchContext.Provider>
        </div>
    );
}

export default App;
