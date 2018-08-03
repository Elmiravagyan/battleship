import types from './types';

export const setBoard = (initialState) => ({
    type: types.RESET_BOARD,
    initialState,
});

export const markBoardField = (fieldId) => ({
    type: types.MARK_FIELD,
});