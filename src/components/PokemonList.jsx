import styled from "styled-components";
import MOCK_DATA from "./data/MOCK_DATA"

const PokemonList = ({ addPokemon }) => {

    return (
        <div>
            <UlWrapper>
                <PokemonUl>
                    {MOCK_DATA.map((pokemon) =>
                        <PokemonCardList key={pokemon.id}>
                            <img src={pokemon.img_url} alt={pokemon.korean_name} />
                            <h3>{pokemon.korean_name}</h3>
                            <p>No.00{pokemon.id}</p>
                            <AddButton onClick={() => addPokemon(pokemon)}>ADD</AddButton>
                        </PokemonCardList>
                    )}
                </PokemonUl>
            </UlWrapper>
        </div>
    )
}

const PokemonUl = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
`

const UlWrapper = styled.div`
    padding: 20px;
`

const PokemonCardList = styled.li`
    background: white;
    padding: 16px;
    width: 200px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-radius: 12px;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }

    img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        margin-bottom: 10px;
    }
`;

const AddButton = styled.button`
    background: red;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 8px;

    &:hover {
        background: #ff00008d;
    }
`;

export default PokemonList;