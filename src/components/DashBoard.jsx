import styled from "styled-components"

const DashBoard = ({ selectedPokemon, deletePokemon }) => {

    return (
        <div>
            <DashBoardWrapper>
                <Title>My Own Pokémon</Title>
                <SelectedPokemonCards>
                    {selectedPokemon.map((pokemon) => {
                        return (
                            <DashBoardCardList key={pokemon.id}>
                                <img src={pokemon.img_url} alt={pokemon.korean_name} width="50px" />
                                <h3>{pokemon.korean_name}</h3>
                                <p>No.{pokemon.id.toString().padStart(3, "0")}</p>
                                <DeleteButton onClick={() => deletePokemon(pokemon.id)}>
                                    Delete
                                </DeleteButton>
                            </DashBoardCardList>
                        );
                    })}
                </SelectedPokemonCards>
            </DashBoardWrapper>
        </div>
    );
}

const DashBoardWrapper = styled.div`
background-color: #f9f9f9;
border-radius: 10px;

`

const Title = styled.h1`
    display: flex;
    justify-content: center;
`

const SelectedPokemonCards = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
`

const DashBoardCardList = styled.li`
    background: white;
    padding: 16px;
    width: 150px; 
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
        width: 140px;
        height: 140px;
        object-fit: cover;
        margin-bottom: 10px;
    }
`;

const DeleteButton = styled.button`
    background: red;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 8px;
    transition: all 0.3s;

    &:hover {
        background: #ac0101;
    }
`;

export default DashBoard