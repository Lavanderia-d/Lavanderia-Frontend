import React from 'react';
import { Button as BsButton } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .btn {
        padding: 8px 18px;
        font-family: 'Baloo 2', cursive;
        font-size: 1.1em;
        color: ${ props => props.textColor ? props.textColor : "white" };
        background: ${ props => props.color ? props.color : "#0B1D71" };
        border-radius: 0.8rem;
        border: 0;

        &:hover {
            background: ${ props => props.hoverColor ? props.hoverColor : "#0D194F" };
        }

        &:active {
            background: ${ props => props.activeColor ? props.activeColor : "#0D194F" };
        }
    }

    .icon {
        margin: 0;
        padding: 0;
        color: ${ props => props.iconColor ? props.iconColor : "#0B1D71" };
        background: ${ props => props.color ? props.color : "transparent" };

        &:hover {
            background: ${ props => props.hoverColor ? props.hoverColor : "transparent" };
        }

        &:active {
            background: ${ props => props.activeColor ? props.activeColor : "transparent" };
        }

        span {
            margin: 8px;
        }
    }
`;


export const Button = (props) => (
    <Styles
        color={ props.color }
        hoverColor={ props.hoverColor }
        activeColor={ props.activeColor }
        textColor={ props.textColor }>
        <BsButton
            href={ props.href }
            onClick={ props.onPress }
            block>
            { props.title }
        </BsButton>
    </Styles>
)

export const IconButton = (props) => (
    <Styles
        color={ props.color }
        hoverColor={ props.hoverColor }
        activeColor={ props.activeColor }
        iconColor={ props.iconColor }>
        <BsButton
            className="icon"
            onClick={ props.onPress }>
            <span className="material-icons">{ props.iconName }</span>
        </BsButton>
    </Styles>
)