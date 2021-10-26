// js
import reducer from './reducers';
import { logoutAuth, updateCard, updateUser } from './actions';

// constants
const actions = {
    logoutAuth,
    updateUser,
    updateCard,
};

export default { actions, reducer };
