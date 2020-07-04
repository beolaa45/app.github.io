import axios from 'axios';
import env from 'dotenv';
import queryString from 'query-string';
env.config();
const axiosClient = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {Accept: 'application/json',
                        "Content-Type": 'application/json'},
        paramsSerializer: params => queryString.stringify(params)
});

axiosClient.interceptors.request.use((config) => {
        // Handle token here ...
        return config;
        })
        axiosClient.interceptors.response.use((response) => {
        if (response && response.data) {
        return response.data;
        }
        return response;
        }, (error) => {
        // Handle errors
        throw error;
})

export default axiosClient;