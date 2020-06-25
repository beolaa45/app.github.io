import axios from 'axios';
import env from 'dotenv';
env.config();
const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

export default instance;