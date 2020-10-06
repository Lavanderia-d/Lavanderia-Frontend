import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { mapToConvenientFormat } from '../utils';
import { getOrderById } from '../services';
import { Item } from '../container';
import {
  Expanded,
  Spacer,
  Chip,
  IconButton,
  ItemDialog,
  PendingStatus,
  DeliveredStatus
} from '../components';

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

const OrderLayout = (props) => {
  const [order, setOrder] = useState(props.order);

  const handleItemCreated = (item) => {
    let items = order.items;
    items.push(item);
    setOrder({ items: items, ...order });
  }

  const handleItemDeleted = (item) => {
    console.log(order.items);
    let items = order.items;
    let index = items.indexOf(item);
    items.splice(index, 1);
    console.log(items);
    setOrder({ items: items, ...order });
  }

  return (
    <div>
      <Container fluid>
        <Row>
          <Col className="pl-0">
            <Title>{ `Pedido #${ order.id }` }</Title>
          </Col>
          <Spacer />
          <Chip title={ order.customer.name } color="#47BCBB" />
          <Spacer />
          <Chip
            title={ mapToConvenientFormat(order.items.length) }
            color="#47BCBB" />
          <Spacer />
          {
            order.status === 0 ?
            <PendingStatus /> :
            <DeliveredStatus />
          }
          <Spacer />
          <IconButton
            iconName="add"
            color="#0B1D71"
            hoverColor="#0D194F"
            activeColor="#0D194F"
            iconColor="white"
            onPress={ props.showDialog } />
        </Row>
      </Container>
      <Expanded height="0.2rem" />
      {
        order.items && order.items.length > 0 ?
        order.items.map((item, i) => (      
          <Item
            key={ item.id }
            item={ item }
            onDeleted={ handleItemDeleted } />
        )) :
        <TextWrapper>
            <p>Não há peças!</p>
        </TextWrapper>
      }
      <ItemDialog
        orderId={ order.id }
        show={ props.show }
        onHide={ props.closeDialog }
        onSuccess={ handleItemCreated } />
    </div>
);
}

const NullOrderLayout = () => (
  <TextWrapper>
    <p>Pedido não encontrado!</p>
  </TextWrapper>
);

export const Order = () => {
  const [order, setOrder] = useState(null);
  const [showDialog, setShowDialog] = useState(false);

  let { id } = useParams();

  useEffect(() => {
    getOrderById(id).then((response) => {
        setOrder(response.data);
    });
  }, []);
  
  const handleCloseDialog = () => setShowDialog(false);
  const handleShowDialog = () => setShowDialog(true);

  return order
    ? <OrderLayout
        order={ order }
        show={ showDialog }
        showDialog={ handleShowDialog }
        closeDialog={ handleCloseDialog } />
    : <NullOrderLayout />;
}