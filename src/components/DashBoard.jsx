import styled from "styled-components"

const DashBoard = ({ selectedPokemons, deletePokemon }) => {

    return (
        <div>
            <DashBoardWrapper>
                <Title>My Own Pokémon</Title>
                <PokemonGrid>
                    {selectedPokemons.map((pokemon) => {
                        return (
                            <div key={pokemon.id}>
                                <img src={pokemon.img_url} alt={pokemon.korean_name} width="50px" />
                                <p>{pokemon.korean_name}</p>
                                <p>No. 00{pokemon.id}</p>
                                <button onClick={() => deletePokemon(pokemon.id)}>삭제</button>
                            </div>
                        );
                    })}
                </PokemonGrid>
            </DashBoardWrapper>
        </div>
    );
}

const DashBoardWrapper = styled.div`
background-color: #f9f9f9;
border-radius: 10px;

`

const Title = styled.h2`
    display: flex;
    justify-content: center;
`

const PokemonGrid = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`

export default DashBoard