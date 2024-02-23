import { productsApi } from './../../../api/productsApi';
import { AppDispatch } from "../.."
import { addProduct, endLoadingProducts, removeProduct, setProduct, setProducts, startLoadingProducts, putProduct } from "./productSlice";


export const getProducts = (page: number = 0) => {
    return async (dispatch: AppDispatch) => {
        dispatch(startLoadingProducts());

        if (localStorage.getItem('products')) {
            const payload = {
                page: page + 1,
                products: JSON.parse(localStorage.getItem('products')!)
            };
            dispatch(setProducts(payload));
            return;
        }

        try {
            const {data} = await productsApi.get(`/objects`);
            const payload = {
                page: page + 1,
                products: data
            };
            
            dispatch(setProducts(payload));
        } catch (error) {
            console.log(error)
            const payload = {
                page: page + 1,
                products: []
            };
            
            dispatch(setProducts(payload));
        }
        
        
    }
}

export const getProduct = (idProduct: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(startLoadingProducts());
        try {
            const {data} = await productsApi.get(`/objects/${idProduct}`);
            dispatch(setProduct(data));
        } catch (error) {
            console.log(error);
            dispatch(setProduct({}));
        }
        
    }
}

export const createProduct = ({...products}) => {
    return async (dispatch: AppDispatch) => {
        dispatch(startLoadingProducts());

        const {productName, productYear, productPrice, onResetForm} = products

        if (productName.length < 1 || productYear.length < 1 || productPrice.length < 1) {
            alert('Tiene que completar todos los campos');
            dispatch(endLoadingProducts());
            return;
        }

        if (productPrice < 1) {
            alert('El precio tiene que ser mayor a 0');
            dispatch(endLoadingProducts());
            return;
        }
        
        const payload = {
            "name": productName,
            "data": {
                "year": productYear,
                "price": productPrice
            }
        }

        await productsApi.post(`/objects`, payload)
        .then(({data}) => {
            dispatch(addProduct(data));
            onResetForm();
            alert('Producto creado satisfactoriamente');
        })
        .catch(({response}) => {
            console.log(response)
            const {data} = response;
            alert(data.error)
            dispatch(endLoadingProducts());
        });        
    }
}

export const updateProduct = ({...products}) => {
    return async (dispatch: AppDispatch) => {
        dispatch(startLoadingProducts());

        const {id, productName, productYear, productPrice} = products;

        if (productName.length < 1 || productYear.length < 1 || productPrice.length < 1) {
            alert('Tiene que completar todos los campos');
            dispatch(endLoadingProducts());
            return;
        }

        if (productPrice < 1) {
            alert('El precio tiene que ser mayor a 0');
            dispatch(endLoadingProducts());
            return;
        }
        
        const payload = {
            "name": productName,
            "data": {
                "year": productYear,
                "price": productPrice
            }
        }

        await productsApi.put(`/objects/${id}`, payload)
        .then(({data}) => {
            dispatch(putProduct(data));
            alert('Producto Actualizado satisfactoriamente');
        })
        .catch(({response}) => {
            console.log(response)
            const {data} = response;
            alert(data.error)
            dispatch(endLoadingProducts());
        });        
    }
}

export const deleteProduct = (idProduct: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(startLoadingProducts());

        await productsApi.delete(`/objects/${idProduct}`)
        .then(({data}) => {
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