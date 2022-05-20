// libraries
import axios from 'axios';

// js
import constants from '../utils/constants';

// constants
const baseURL = constants.BaseURL;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const ActionLogin = async (email: string, password: string) => {
    try {
        const data = {
            email,
            password,
            type: 'users_adm',
        };
        const body = JSON.stringify(data);
        const header = {
            'Content-Type': 'application/json',
        };
        const response = await axios.post(`${baseURL}/users/token`, body, { headers: header });
        return response.data;
    } catch (error) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { response }: any = error;
        // eslint-disable-next-line no-alert
        alert(response?.data?.message);
        return null;
    }
};

export default {
    ActionLogin,
};
