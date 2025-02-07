import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PokemonCard = ({ pokemon, clickButton, buttonText }) => {

    const navigate = useNavigate();

    const handleCardClick = (pokemon) => {
        navigate(`/details?img=${pokemon.img_url}&name=${pokemon.korean_name}&types=${pokemon.types}&description=${pokemon.description}`);
    }

    return (
        <StPokemonCard
            onClick={() => { handleCardClick(pokemon) }}>
            <img src={pokemon.img_url} alt={pokemon.korean_name} />
            <h3>{pokemon.korean_name}</h3>
            <p>No.{pokemon.id.toString().padStart(3, '0')}</p>
            <StButton onClick={(e) => {
                e.stopPropagation();
                clickButton(pokemon);
            }}>
                {buttonText}
            </StButton>
        </StPokemonCard>
    )
}

const StPokemonCard = styled.li`
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
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }

    img {
        width: 160px;
        height: 160px;
        object-fit: cover;
        margin-bottom: 10px;
    }
`;

const StButton = styled.button`
    background: #ebbe6b;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 8px;
    transition: all 0.3s;

    &:hover {
        background: #e9a62a;
    }
`;

export default PokemonCard;