import styled from "styled-components"

const DashBoard = () => {

    const DashBoardWrapper = styled.div`
    background-color: #f9f9f9;
    border-radius: 10px;
    
`

    const Title = styled.div`
        display: flex;
        justify-content: center;
    `

    return (
        <div>
            <DashBoardWrapper>
                <Title>My Own Pokémon</Title>
            </DashBoardWrapper>
        </div>
    )
}

export default DashBoard