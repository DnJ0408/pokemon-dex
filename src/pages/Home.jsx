import { Link } from "react-router-dom";
import TitleImageSrc from "../assets/pokemonLogo.png"
import styled from "styled-components";

const Home = () => {

    return (
        <Container>
            <TitleImage src={TitleImageSrc} alt="Pokémon Logo" />
            <LinkToDex to="/dex">Create Your Pokédex</LinkToDex>
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

const TitleImage = styled.img`
    width: 600px;
    max-width: 80%;
    margin-bottom: 40px;
`;

const LinkToDex = styled(Link)`
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