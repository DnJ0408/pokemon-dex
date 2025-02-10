import styled from "styled-components";
import MOCK_DATA from "./data/MOCK_DATA"
import PokemonCard from "./PokemonCard";
import { useDispatch } from "react-redux";
import { addPokemon } from "../redux/slices/pokemonSlice";

const PokemonList = () => {

    const dispatch = useDispatch();

    return (
        <StPokemonUl>
            {MOCK_DATA.map((pokemon) =>
                <PokemonCard
                    key={pokemon.id}
                    pokemon={pokemon}
                    buttonText="ADD"
                    clickButton={(data) => dispatch(addPokemon(data))}
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