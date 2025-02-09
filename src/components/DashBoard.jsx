import styled from "styled-components"
import PokemonCard from "./PokemonCard";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

const DashBoard = () => {

    const { deletePokemon, selectedPokemon } = useContext(PokemonContext);

    return (
        <StDashBoardWrapper>
            <StTitle>My Own Pokémon</StTitle>
            <StSelectedPokemonCards>
                {selectedPokemon.map((pokemon) =>
                    <PokemonCard
                        key={pokemon.id}
                        pokemon={pokemon}
                        buttonText="Delete"
                        clickButton={() => deletePokemon(pokemon.id)}
                    />
                )}
            </StSelectedPokemonCards>
        </StDashBoardWrapper>
    );
}

const StDashBoardWrapper = styled.div`
background-color: white;
border-radius: 10px;
`

const StTitle = styled.h1`
    display: flex;
    justify-content: center;
    color: #d40303;
`

const StSelectedPokemonCards = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
`
export default DashBoard;