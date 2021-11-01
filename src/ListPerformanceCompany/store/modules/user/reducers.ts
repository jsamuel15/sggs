// libraries
import { AnyAction } from 'redux';
import { handleActions } from 'redux-actions';

// js
import { LOGOUT, UPDATE_USER, UPDATE_CARD } from './constants';

const initialState = {
    user: {
        name: 'dsa',
        email: 'pedro@gmail.com',
        profession: 'sdasda',
        password: '123123',
    },
    allCards: [
        {
            id: 1,
            title: 'Tokyo Stock Exchange',
            price: 800,
            valorize: false,
            percentage: 1.5,
        },
        {
            id: 2,
            title: 'Shanghai Stock Exchange',
            price: 750,
            valorize: true,
            percentage: 2,
        },
        {
            id: 3,
            title: 'Hong Kong Stock Exchange',
            price: 40,
            valorize: true,
            percentage: 6,
        },
        {
            id: 4,
            title: 'NYSE - New York Stock Exchange',
            price: 1000,
            valorize: true,
            percentage: 1.5,
        },
        {
            id: 5,
            title: 'Euronext',
            price: 9424.23,
            valorize: false,
            percentage: 0.23,
        },
        {
            id: 6,
            title: 'London Stock Exchange',
            price: 324.23,
            valorize: true,
            percentage: 2.45,
        },
        {
            id: 7,
            title: 'Shenzhen Stock Exchange',
            price: 2394.2,
            valorize: false,
            percentage: 0.83,
        },
        {
            id: 8,
            title: 'NASDAQ',
            price: 3823.23,
            valorize: false,
            percentage: 0.2,
        },
    ],
};

const handlers = {
    [LOGOUT]: () => initialState,
    [UPDATE_USER]: (state = initialState, action: AnyAction) => {
        const user = action.payload;
        return { ...state, user };
    },
    [UPDATE_CARD]: (state = initialState, action: AnyAction) => {
        const allCards = action.payload;
        return { ...state, allCards };
    },
};

export default handleActions(handlers, initialState);
