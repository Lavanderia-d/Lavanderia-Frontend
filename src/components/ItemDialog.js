import React from 'react';
import { Modal, Form } from 'react-bootstrap'

import { useInput } from '../utils/input.hook';
import { updateItem, createItem } from '../services';
import { Button } from './';

const getTypeStr = (type) => {
  return type === 0 ? "Social" : "Casual";
}

const getTypeValue = (typeStr) => {
  return typeStr === "Social" ? 0 : 1;
}

const formatValue = (value) => {
  return value.toString().replace('.', ',');
}

const formatValueToJson = (value) => {
  return parseFloat(value.replace(',', '.'));
}

export const ItemDialog = (props) => {
  const {
    value: type,
    bind: bindType,
    reset: resetType
  } = useInput(props.item ? getTypeStr(props.item.type) : 'Social');
  
  const {
    value: color,
    bind: bindColor,
    reset: resetColor
  } = useInput(props.item ? props.item.color : '');

  const {
    value: value,
    bind: bindValue,
    reset: resetValue
  } = useInput(props.item ? formatValue(props.item.value) : '');

  const resetAllFields = () => {
    resetType();
    resetColor();
    resetValue();
  }

  const handleCreate = () => {
    createItem({
      orderId: props.orderId,
      type: getTypeValue(type),
      color: color,
      value: formatValueToJson(value)
    })
    .then((response) => {
      props.onHide();
      resetAllFields();
      props.onSuccess(response.data);
    });
  }

  const handleUpdate = () => {
    updateItem(props.item.id, {
      type: getTypeValue(type),
      color: color,
      value: formatValueToJson(value)
    })
    .then((response) => {
      props.onHide();
      props.onSuccess(response.data);
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
          <Modal.Title>
            { props.item ? "Editar Item" : "Adicionar Item" }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formItemType">
              <Form.Label>Tipo</Form.Label>
              <Form.Control
                as="select"
                placeholder="Tipo de peça"
                { ...bindType }>
                <option>Social</option>
                <option>Casual</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formItemColor">
              <Form.Label>Cor</Form.Label>
              <Form.Control
               type="text"
               placeholder="Cor da peça..."
               { ...bindColor } />
            </Form.Group>
            <Form.Group controlId="formItemValue">
              <Form.Label>Valor</Form.Label>
              <Form.Control
                type="text"
                placeholder="Valor da peça..."
                { ...bindValue } />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            title={ props.item ? "Salvar" : "Adicionar" }
            onPress={ props.item ? handleUpdate : handleCreate } />
        </Modal.Footer>
      </Modal>
    </div>
  );
}