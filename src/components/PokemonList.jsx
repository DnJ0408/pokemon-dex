import styled from "styled-components";
import MOCK_DATA from "./data/MOCK_DATA"
import { useNavigate } from "react-router-dom";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ addPokemon }) => {

    const navigate = useNavigate();

    const handleCardClick = (pokemon) => {
        navigate(`/details?img=${pokemon.img_url}&name=${pokemon.korean_name}&types=${pokemon.types}&description=${pokemon.description}`);
        console.log(pokemon);
    }
    return (
        <PokemonUl>
            {MOCK_DATA.map((pokemon) =>
                <PokemonCard
                    key={pokemon.id}
                    pokemon={pokemon}
                    addPokemon={addPokemon}
                    handleCardClick={handleCardClick}
                />
            )}
        </PokemonUl>
    )
}

const PokemonUl = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    padding: 20px;
`

export default PokemonList;