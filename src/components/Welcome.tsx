import React from 'react'
import styled from 'styled-components'

const Welcome = () => {
    return (
        <WelcomeContainer>
            Hi and welcome to team Gilded Rose.
        </WelcomeContainer>
    )
}

export default Welcome
const WelcomeContainer = styled.div`
font-size: 4.5rem;
font-weight: 800;
color: rgba(17,24,39,1);
display: flex;
justify-content: center;

`;

