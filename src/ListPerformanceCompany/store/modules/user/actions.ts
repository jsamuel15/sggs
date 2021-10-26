/* eslint-disable max-len */
// js
import { LOGOUT, UPDATE_USER, UPDATE_CARD } from './constants';
import { AppDispatch } from '../../index';

// interfaces
import { allLisCardInterfaces } from '../../../interfaces';

// actions
export const logoutAuth: AppDispatch = () => (dispatch: AppDispatch) => {
    dispatch({
        type: LOGOUT,
    });
};

export const updateCard: AppDispatch = (allCards: allLisCardInterfaces) => (dispatch: AppDispatch) => {
    dispatch({
        type: UPDATE_CARD,
        payload: allCards,
    });
};

export const updateUser: AppDispatch = (user: allLisCardInterfaces) => (dispatch: AppDispatch) => {
    dispatch({
        type: UPDATE_USER,
        payload: user,
    });
};
