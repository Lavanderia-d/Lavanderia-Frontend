import React from 'react';
import { Row, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { mapToConvenientFormat } from '../utils';
import {
  Card,
  Chip,
  Spacer,
  PendingStatus,
  DeliveredStatus
} from '../components';

const Title = styled.h3`
    font-family: 'Lato', sans-serif;
    font-size: 1.2em;
    font-weight: 600;
    color: black;
`;

export const Order = (props) => {
  const routerHistory = useHistory();

  const handlePress = () => {
    routerHistory.push(`/order/${ props.order.id }`)
  }

  return (
    <Card onPress={ handlePress }>
      <Title>{ `Pedido #${ props.order.id }` }</Title>
      <Spacer />
      <Container fluid>
        <Row>
          {
            props.order.status === 0 ?
            <PendingStatus /> :
            <DeliveredStatus />
          }
          <Spacer />
          <Chip
            title={ mapToConvenientFormat(props.order.items.length) }
            color="#47BCBB" />
        </Row>
      </Container>
    </Card>
  );
}