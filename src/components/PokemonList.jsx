import styled from "styled-components";
import MOCK_DATA from "./data/MOCK_DATA"

const PokemonList = () => {

    const PokemonUl = styled.div`
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
    `

    return (
        <div>
            <PokemonUl>
                {MOCK_DATA.map((pokemon) => {
                    return (
                        <li key={pokemon.id}>
                            <img src={pokemon.img_url} alt={pokemon.korean_name} />
                            <h3>{pokemon.korean_name}</h3>
                            <p>No.00{pokemon.id}</p>
                            <button>ADD</button>
                        </li>
                    );
                })}
            </PokemonUl>
        </div>
    )
}

export default PokemonList;