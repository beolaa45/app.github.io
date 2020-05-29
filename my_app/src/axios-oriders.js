import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-app-e884b.firebaseio.com'
});

export default instance;