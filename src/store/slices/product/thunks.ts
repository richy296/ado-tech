import { productsApi } from './../../../api/productsApi';
import { AppDispatch } from "../.."
import { addProduct, removeProduct, setProduct, setProducts, startLoadingProducts } from "./productSlice";


export const getProducts = (page: number = 0) => {
    return async (dispatch: AppDispatch) => {
        dispatch(startLoadingProducts());
        
        const {data} = await productsApi.get(`/objects`);
        const payload = {
            page: page + 1,
            products: data
        };
          
        dispatch(setProducts(payload));
    }
}

export const getProduct = (idProduct: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(startLoadingProducts());
        
        const {data} = await productsApi.get(`/objects/${idProduct}`);
        console.log(data);
        dispatch(setProduct(data));
    }
}

export const createProduct = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(startLoadingProducts());

        const payload = {
            "name": "Apple MacBook Pro 16",
            "data": {
                "year": 2019,
                "price": 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"
            }
        }

        await productsApi.post(`/objects`, payload)
        .then(({data}) => {
            console.log(data)
            dispatch(addProduct(data));
        })
        .catch(({response}) => {
            console.log(response)
            const {data} = response;
            alert(data.error)
            dispatch(getProducts());
        });        
    }
}

export const deleteProduct = (idProduct: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(startLoadingProducts());

        await productsApi.delete(`/objects/${idProduct}`)
        .then(({data}) => {
            console.log(data)
            alert(data.message)
            dispatch(removeProduct(idProduct));
        })
        .catch(({response}) => {
            console.log(response)
            const {data} = response;
            alert(data.error)
        });
    }
}