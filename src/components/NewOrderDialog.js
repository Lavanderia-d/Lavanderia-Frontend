import React from 'react';
import { Modal, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { createOrder } from '../services';
import { useInput } from '../utils/input.hook'
import { Button } from './';

export const NewOrderDialog = (props) => {
  const routerHistory = useHistory();
  const {
    value: customerId,
    bind: bindCustomerId,
    reset: resetCustomerId
  } = useInput('');

  const handleSave = () => {
    createOrder({ customerId })
      .then((response) => {
        props.onHide();
        resetCustomerId();
        routerHistory.push("/empty");
        routerHistory.push(`/order/${ response.data.id }`);
      });
  }

  return (
    <div>
      <Modal
        show={ props.show }
        onHide={ props.onHide }
        backdrop="static"
        keyboard={ false }
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Novo Pedido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formCustomerId">
                <Form.Label>Cliente</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Id do Cliente..."
                    { ...bindCustomerId } />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button title="Salvar" onPress={ handleSave } />
        </Modal.Footer>
      </Modal>
    </div>
  );
}