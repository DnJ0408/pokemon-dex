import { Link } from "react-router-dom";
import TitleImage from "../assets/logo.png"
import styled from "styled-components";

const Home = () => {

    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `

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

    return (
        <Container>
            <div>
                <img src={TitleImage} style={{ width: "600px" }} />
            </div>
            <div>
                <LinkToDex to="/dex">Create Your Pokédex</LinkToDex>
            </div>
        </Container>
    )
}

export default Home;