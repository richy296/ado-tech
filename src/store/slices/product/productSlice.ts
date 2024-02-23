
import { createSlice } from '@reduxjs/toolkit';
import { Products } from '../../../dashboard/interfaces/interfaces';

interface ProductState {
    page: number,
    products: Products[],
    product: Products,
    isLoading: boolean
}
  
const initialState = { 
    page: 0,
    products: [],
    product: {
        id: '',
        name: '',
        data: {}
    },
    isLoading: false
 } satisfies ProductState as ProductState

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        startLoadingProducts: (state, /* action */ ) => {
            state.isLoading = true;
        },
        setProduct: (state, action) => {
            state.isLoading = false;
            state.product = action.payload.product;
        },
        setProducts: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.products = action.payload.products;
        },
        addProduct: (state, action) => {
            state.isLoading = false;
            state.products.push(action.payload)
        },
        removeProduct: (state, action) => {
            state.isLoading = false;
            state.products = state.products.filter(product => product.id !== action.payload);
        }
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingProducts, setProducts, addProduct, removeProduct, setProduct } = productSlice.actions;