import styled from "styled-components";
import MOCK_DATA from "./data/MOCK_DATA"
import PokemonCard from "./PokemonCard";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

const PokemonList = () => {

    const { addPokemon } = useContext(PokemonContext);

    return (
        <StPokemonUl>
            {MOCK_DATA.map((pokemon) =>
                <PokemonCard
                    key={pokemon.id}
                    pokemon={pokemon}
                    buttonText="ADD"
                    clickButton={addPokemon}
                />
            )}
        </StPokemonUl>
    )
}

const StPokemonUl = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    padding: 20px;
`

export default PokemonList;