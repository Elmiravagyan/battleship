import _ from 'underscore';
import createReducer from '../../helpers/createReducer';
import types from './types';

const initDefaultMatrix = () => {
    return _.map(_.range(10), row => {
        return _.map(_.range(10), column => {
                return {row, column, beaten: false, marked: false, type: 1, };

        })
    })
};

export const board = createReducer({}, {
    [types.RESET_BOARD](state, action) {
        return initDefaultMatrix();
    },
    [types.MARK_FIELD](state, action) {
        return action
    },
});

export default board;
