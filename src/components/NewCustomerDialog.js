import React from 'react';
import { Modal, Form, Col } from 'react-bootstrap';

import { useInput } from '../utils/input.hook';
import { createCustomer } from '../services';
import { Button } from './';

export const NewCustomerDialog = (props) => {
    const { value: name, bind: bindName, reset: resetName } = useInput('');
    const { value: DDD, bind: bindDDD, reset: resetDDD } = useInput('');
    const { value: phoneNumber, bind: bindPhoneNumber, reset: resetPhoneNumber } = useInput('');
    const { value: street, bind: bindStreet, reset: resetStreet } = useInput('');
    const { value: addressNumber, bind: bindAddressNumber, reset: resetAddressNumber } = useInput('');
    const { value: complement, bind: bindComplement, reset: resetComplement } = useInput('');
    const { value: municipality, bind: bindMunicipality, reset: resetMunicipality } = useInput('');
    const { value: state, bind: bindState, reset: resetState } = useInput('');
    const { value: postalCode, bind: bindPostalCode, reset: resetPostalCode } = useInput('');

    const resetAllFields = () => {
        resetName();
        resetDDD();
        resetPhoneNumber();
        resetStreet();
        resetAddressNumber();
        resetComplement();
        resetMunicipality();
        resetState();
        resetPostalCode();
    }

    const handleSave = () => {
        createCustomer({ 
            name: name,
            phone: {
                ddd: DDD,
                number: phoneNumber
            },
            address: {
                street: street,
                number: addressNumber,
                complement: complement,
                municipality: municipality,
                state: state,
                postalCode: postalCode
            }
        })
        .then((response) => {
            props.onHide();
            resetAllFields();
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
            <Modal.Title>Novo Cliente</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group controlId="formName">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        required
                        type="name"
                        placeholder="Nome do Cliente..."
                        { ...bindName } />
                </Form.Group>
                <Form.Group controlId="formPhone">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Row>
                        <Col md="2">
                            <Form.Control
                                required
                                type="text"
                                placeholder="DDD"
                                { ...bindDDD } />
                        </Col>
                        <Col>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Número.."
                                { ...bindPhoneNumber } />
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Form.Group controlId="formAddressStreetNumber">
                    <Form.Label>Endereço</Form.Label>
                    <Form.Row>
                        <Col>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Nome da rua, avenida, etc.."
                                { ...bindStreet } />
                        </Col>
                        <Col md="3">
                            <Form.Control
                                required
                                type="text"
                                placeholder="Número"
                                { ...bindAddressNumber } />
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Form.Group controlId="formAddressComplement">
                    <Form.Row>
                        <Col>
                            <Form.Control
                                type="text"
                                placeholder="Complemento.."
                                { ...bindComplement } />
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Form.Group controlId="formAddressMunStateCEP">
                    <Form.Row>
                        <Col>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Município"
                                { ...bindMunicipality } />
                        </Col>
                        <Col>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Estado"
                                { ...bindState } />
                        </Col>
                        <Col md="3">
                            <Form.Control
                                required
                                type="text"
                                placeholder="CEP"
                                { ...bindPostalCode } />
                        </Col>
                    </Form.Row>
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