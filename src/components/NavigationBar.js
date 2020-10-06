import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

import { Button, Spacer, NewCustomerDialog, NewOrderDialog } from './';

const Styles = styled.div`
    .navbar {
        padding: 0;
    }

    .brand {
        margin: 0;
        font-family: 'Pacifico', cursive;
        font-size: 2em;
        color: #47BCBB;
        cursor: default;
    }
`;

const HomeButton = () => (
    <Button title="Início" href="/" />
)

export const NavigationBar = () => {
    const location = useLocation().pathname;
    const showHomeButton = location !== '/';

    const [showCustomerDialog, setShowCustomerDialog] = useState(false);
    const handleCloseCustomerDialog = () => setShowCustomerDialog(false);
    const handleShowCustomerDialog = () => setShowCustomerDialog(true);

    const [showOrderDialog, setShowOrderDialog] = useState(false);
    const handleCloseOrderDialog = () => setShowOrderDialog(false);
    const handleShowOrderDialog = () => setShowOrderDialog(true);

    return (
        <Styles>
            <Navbar expand="lg">
                <h1 className="brand">Lavanderia</h1>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ml-auto">
                        { showHomeButton ? <Spacer /> : null }
                        { showHomeButton ? <HomeButton /> : null }
                        <Spacer />
                        <Button title="Novo Cliente" onPress={ handleShowCustomerDialog } />
                        <Spacer />
                        <Button title="Novo Pedido" onPress={ handleShowOrderDialog } />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <NewCustomerDialog
                show={ showCustomerDialog }
                onHide={ handleCloseCustomerDialog } />
            <NewOrderDialog
                show={ showOrderDialog }
                onHide={ handleCloseOrderDialog } />
        </Styles>
    );
}