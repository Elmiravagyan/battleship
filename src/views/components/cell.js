import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import initDefaultMatrix from '../../redux/ducks/board/reducer';

export const Square = styled.div`
  background-color: #2185d0;
  border: 1px solid black;
  height: 36px;
  margin: 1px;
  width: 36px;
`;

const Cell = (props) => {
    return <Square onClick={()=>{console.log(initDefaultMatrix())}}></Square>;
};

Cell.propTypes = {
    addSymbol: PropTypes.func.isRequired
};

export default Cell;