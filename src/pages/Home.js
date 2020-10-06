import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Expanded } from '../components';
import { Order } from '../container';
import { getAllOrders } from '../services';

const Title = styled.h2`
    font-family: 'Lato', sans-serif;
    font-size: 1.5em;
    font-weight: bold;
    color: black;
`;

const TextWrapper = styled.div`
    text-align: center;

    p {
        font-family: 'Lato', sans-serif;
        font-size: 1em;
        color: black;
    }
`;

export const Home = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getAllOrders().then((response) => {
            setOrders(response.data);
        });
    }, []);

    return (
        <div>
            <Title>Pedidos</Title>
            <Expanded height="0.2rem" />
            {
                orders && orders.length > 0 ?
                orders.map((order, i) => (    
                    <Order key={ order.id } order={ order } />
                )) :
                <TextWrapper>
                    <p>Não há pedidos!</p>
                </TextWrapper>
            }
        </div>
    )
}