import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import { deleteItem } from '../services';
import {
  Card,
  Chip,
  Spacer,
  IconButton,
  ItemDialog,
  ConfirmDialog
} from '../components';

const Title = styled.h3`
    font-family: 'Lato', sans-serif;
    font-size: 1.2em;
    font-weight: 600;
    color: black;
`;

const ButtonWrapper = styled.div`
  margin: auto 0;
  margin-right: 18px;
`;

const formatValue = (value) => {
  return value.toString().replace('.', ',');
}

export const Item = (props) => {
  const [item, setItem] = useState(props.item);
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  
  const handleCloseUpdateDialog = () => setShowUpdateDialog(false);
  const handleShowUpdateDialog = () => setShowUpdateDialog(true);

  const handleCloseDeleteDialog = () => setShowDeleteDialog(false);
  const handleShowDeleteDialog = () => setShowDeleteDialog(true);

  const handleUpdated = (data) => {
    setItem(data);
  }

  const handleDeleted = () => {
    deleteItem(props.item.id);
    props.onDeleted(props.item);
  }

  return (
    <Card>
      <Container fluid>
        <Row>
          <Col className="p-0" onClick={ handleShowUpdateDialog } >
            <Title>{ `Item #${ item.id }` }</Title>
            <Spacer />
            <Container fluid>
              <Row>
                <Chip
                 title={ item.color }
                 color="#47BCBB" />
                <Spacer />
                <Chip
                  title={ item.type === 0 ? "Social" : "Casual" }
                  color="#47BCBB" />
                <Spacer />
                <Chip
                  title={ `R$ ${ formatValue(item.value) }` }
                  color="#47BCBB" />
              </Row>
            </Container>
          </Col>
          <ButtonWrapper>
            <IconButton
              iconName="close"
              onPress={ handleShowDeleteDialog } />
          </ButtonWrapper>
        </Row>
      </Container>
      <ItemDialog
          item={ item }
          show={ showUpdateDialog }
          onHide={ handleCloseUpdateDialog }
          onSuccess={ handleUpdated } />
      <ConfirmDialog
        text="Quer mesmo excluir essa peça?"
        show={ showDeleteDialog }
        onHide={ handleCloseDeleteDialog }
        onConfirm={ handleDeleted } />
    </Card>
  );
}