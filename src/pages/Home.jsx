import { Link } from "react-router-dom";
import TitleImageSrc from "../assets/pokemonLogo.png"
import styled from "styled-components";

const Home = () => {

    return (
        <StContainer>
            <StTitleImage src={TitleImageSrc} alt="Pokémon Logo" />
            <StLinkToDex to="/dex">Create Your Pokédex</StLinkToDex>
        </StContainer>
    )
}


const StContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

const StTitleImage = styled.img`
    width: 600px;
    max-width: 80%;
    margin-bottom: 40px;
`;

const StLinkToDex = styled(Link)`
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