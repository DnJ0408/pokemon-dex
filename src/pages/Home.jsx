import { useNavigate } from "react-router-dom";
import TitleImageSrc from "../assets/pokemonLogo.png"
import styled, { keyframes } from "styled-components";
import { useState } from "react";

//*--- slide-out animation ---*//
const slideOutTop = keyframes`
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    100% {
        transform: translateY(-1000px);
        opacity: 0;
    }
`

const Home = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setIsAnimating(true);

        setTimeout(() => {
            navigate("/dex");
        }, 700);
    }

    return (
        <StContainer isAnimating={isAnimating}>
            <StTitleImage src={TitleImageSrc} alt="Pokémon Logo" />
            <StButtonToDex onClick={handleClick}>Create Your Pokédex</StButtonToDex>
        </StContainer>
    )
}

//*--- Styled-Components ---*//
const StContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    animation: ${(props) => (props.isAnimating ? slideOutTop : "none")} 1s ease-in-out ;
`

const StTitleImage = styled.img`
    width: 600px;
    max-width: 80%;
    margin-bottom: 40px;
`;

const StButtonToDex = styled.button`
    color: white;
    text-decoration-line: none;
    border: 1px solid red;
    border-radius: 5px;
    background-color: #ff0000;
    padding: 10px;

    &:hover {
        background-color: #cc0000;
    }
`

export default Home;