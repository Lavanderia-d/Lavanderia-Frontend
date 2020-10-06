import React from 'react';
import { Card as BsCard } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .card {
    margin: 20px 0;
    padding: 1rem;
    background: white;
    border-radius: 0.8rem;
    border: 1px solid #EDEDED;
    box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.05);
    cursor: pointer;

    &:hover {
      background: #E1E8E8;
    }
  }
`;

export const Card = (props) => (
    <Styles>
      <BsCard onClick={ props.onPress }>
        { props.children } 
      </BsCard>
    </Styles>
  )