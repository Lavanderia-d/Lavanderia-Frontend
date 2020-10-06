import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const CardWrapper = styled.div`
    min-height: 100vh;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    .card {
        flex: 1;
        width: 100%;
        min-height: 100%;
        padding: 1.5rem;
        border-radius: 1.5rem;
        background: #FBFBFB;
        box-shadow: 0px 20px 40px 0px rgba(0,0,0,0.1);
    }
`;

export const Layout = (props) => (
    <CardWrapper>
        <Card>
            { props.children }
        </Card>
    </CardWrapper>
)