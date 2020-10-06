import React from 'react';
import { Modal } from 'react-bootstrap';
import styled from 'styled-components';

import { Button } from './';

const Text = styled.h3`
    font-family: 'Lato', sans-serif;
    font-size: 1.2em;
    font-weight: normal;
    color: black;
`;

export const ConfirmDialog = (props) => {
    const handleConfirm = () => {
        props.onHide();
        props.onConfirm();
    }
    return (
        <Modal
            show={ props.show }
            onHide={ props.onHide }
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
            <Modal.Title>Tem certeza?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Text>{ props.text }</Text>
            </Modal.Body>
            <Modal.Footer>
            <Button
                title="Cancelar"
                color="#DC3545"
                hoverColor="#BD2D3B"
                activeColor="#BD2D3B"
                onPress={ props.onHide } />
            <Button
                title="Confirmar"
                color="#28A745"
                hoverColor="#208738"
                activeColor="#208738"
                onPress={ handleConfirm } />
            </Modal.Footer>
        </Modal>
    );
}