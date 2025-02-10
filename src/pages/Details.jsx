import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import MOCK_DATA from "../components/data/MOCK_DATA";
import { useDispatch } from "react-redux";
import { addPokemon } from "../redux/slices/pokemonSlice";

const Details = () => {

    const dispatch = useDispatch();

    //*--- Page이동 함수 ---*//
    const navigate = useNavigate();

    //*--- query strings로 전달한 데이터를 가져오는 함수  ---*//
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    //*--- params에 담긴 데이터(query strings)를 id, img, name, types, description에 할당 ---*//
    const id = params.get("id");
    const img = params.get("img");
    const name = params.get("name");
    const types = params.get("types");
    const description = params.get("description");

    //*--- 디테일 page에 보여줄 포켓몬 고르는 함수 ---*//
    const handleAddPokemon = () => {
        const pokemon = MOCK_DATA.find((p) => p.id === Number(id));
        console.log(pokemon);
        dispatch(addPokemon(pokemon));
    }

    return (
        <StPageContainer>
            <StCard>
                <StBackButton onClick={() => navigate("/dex")}>
                    <FontAwesomeIcon icon={faAnglesLeft} />
                </StBackButton>
                <StImage src={img} alt={name} />
                <StContent>
                    <StName>{name}</StName>
                    <StTypes>{types}</StTypes>
                    <StDescription>{description}</StDescription>
                    <StAddButton onClick={(e) => {
                        e.stopPropagation();
                        handleAddPokemon();
                    }}>
                        Add
                    </StAddButton>
                </StContent>
            </StCard>
        </StPageContainer>
    );
};

//*--- Styled-Components ---*//
const StPageContainer = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StCard = styled.div`
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

const StBackButton = styled.button`
    align-self: flex-start;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 30px;
    padding: 5px;
    margin-bottom: 10px;
    color: #ebbe6b;

    &:hover {
        color: #e9a62a;
    }
`;

const StImage = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 10px;
`;

const StContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const StName = styled.h2`
    font-size: 28px;
    font-weight: bold;
    color: #333;
`;

const StTypes = styled.p`
    background: #dabf56;
    color: #fff;
    padding: 4px 10px;
    border-radius: 10px;
    font-size: 18px;
    font-weight: bold;
`;

const StDescription = styled.p`
    font-size: 16px;
    color: #666;
    padding: 12px;
    line-height: 1.5;
`;

const StAddButton = styled.button`
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

export default Details;
