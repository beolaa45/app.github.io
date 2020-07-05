import axiosClient from './axiosClient';

class ProductApi {
    getAll = (params) => {
        const  url = `/products?sortBy=${params.sortBy}&order=${params.order}&limit=${params.limit}`
        return axiosClient.post(url)
    }
}

const productApi = new ProductApi();
export default productApi;