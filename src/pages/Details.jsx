import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Details = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const img = params.get("img");
    const name = params.get("name");
    const types = params.get("types");
    const description = params.get("description");

    return (
        <PageContainer>
            <Card>
                <Image src={img} alt={name} />
                <Content>
                    <Name>{name}</Name>
                    <Types>{types}</Types>
                    <Description>{description}</Description>
                </Content>
            </Card>
        </PageContainer>
    );
};

const PageContainer = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Card = styled.div`
    width: 400px;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    text-align: center;
    padding: 20px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Image = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 10px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const Name = styled.h2`
    font-size: 28px;
    font-weight: bold;
    color: #333;
`;

const Types = styled.p`
    background: #ffcc00;
    color: #fff;
    padding: 4px 10px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: bold;
`;

const Description = styled.p`
    font-size: 16px;
    color: #666;
    padding: 12px;
    line-height: 1.5;
`;

export default Details;
