import React from 'react';
import styled from 'styled-components';
import { Segment } from 'semantic-ui-react';
import _ from 'underscore'
import Cell from "./cell";

const Net = styled(Segment)`
  &&& {
      height: 400px;
      width: 400px;
  }
`;

const Playground = styled.div`
        display: flex;
        flex-wrap: wrap;
        height: 380px;
        width: 380px;
        background-color: #2185d0;
`;

const Board = props => (
    <Net raised>
        <Playground>
            {
             _.map(_.range(10), row => {
                 return(
                     _.map(_.range(10), column => {

                         return (<Cell />);
                     })
                 )

        })
            }
        </Playground>
    </Net>
);

export default Board;

