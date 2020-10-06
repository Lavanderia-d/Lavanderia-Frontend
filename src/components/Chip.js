import React from 'react';
import styled from 'styled-components';

const ChipContainer = styled.div`
    font-family: 'Lato', sans-serif;
    font-size: 1em;
    font-weight: 500;
    color: white;
    background: ${ props => props.background };
    border-radius: 0.8rem;
    
    p {
        margin: 8px 18px;
    }
`;

export const Chip = (props) => (
    <ChipContainer background={ props.color }>
        <p>{ props.title }</p>
    </ChipContainer>
)