import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import Details from "../pages/Details";
import { PokemonContextProvider } from "../context/PokemonContext";


const Router = () => {
    return (
        <PokemonContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/dex' element={<Dex />} />
                    <Route path='/details' element={<Details />} />
                </Routes>
            </BrowserRouter>
        </PokemonContextProvider>
    )
}

export default Router;