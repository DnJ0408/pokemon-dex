import styled from "styled-components";
import MOCK_DATA from "./data/MOCK_DATA"

const PokemonList = ({ addPokemon }) => {

    return (
        <div>
            <PokemonUl>
                {MOCK_DATA.map((pokemon) =>
                    <li key={pokemon.id}>
                        <img src={pokemon.img_url} alt={pokemon.korean_name} />
                        <h3>{pokemon.korean_name}</h3>
                        <p>No.00{pokemon.id}</p>
                        <button onClick={() => addPokemon(pokemon)}>ADD</button>
                    </li>
                )}
            </PokemonUl>
        </div>
    )
}

const PokemonUl = styled.ul`
list-style: none;
padding: 0;
margin: 0;
display: flex;
flex-wrap: wrap;
`

export default PokemonList;