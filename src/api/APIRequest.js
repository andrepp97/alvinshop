import Axios from 'axios';

const prefix = "@alvinshop/admin";

// GLOBAL AXIOS
const APIRequest = Axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 20000,
})

// Set JWT in Client
export const setClientToken = (data) => {
    localStorage.setItem(prefix, JSON.stringify(data))
    let config = {
        role: data.role,
        token: data.token,
    }
    APIRequest.defaults.headers = config
};

export default APIRequest;