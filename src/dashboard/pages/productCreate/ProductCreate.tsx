import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/useAppDispatch";
import { useForm } from "../../../hooks/useForm"
import { RootState } from "../../../store";
import { createProduct } from "../../../store/slices/product";
import { Spinner } from "../../components";
import { ProductData } from "../../interfaces/interfaces";


const initialState = {
  productName: '',
  productYear: '',
  productPrice: 0
} satisfies ProductData as ProductData

export const ProductCreate = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {isLoading} = useAppSelector((state: RootState) => state.products);
  const {formState, onInputChange, onResetForm} = useForm(initialState)
  const {productName, productYear, productPrice} = formState;

  const onSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(createProduct({productName, productYear, productPrice, onResetForm}));
  }

  const resetForm = (event: React.FormEvent) => {
    event.preventDefault();
    onResetForm();
  }

  return (
    <form className="row mt-5">
      <h1>Crear Producto</h1>
      <hr />
      { isLoading ?
        <Spinner /> : (
        <>
          <input 
              placeholder='Nombre del producto'
              type="text" 
              className="form-control mb-2" 
              name="productName"
              value={productName}
              onChange={onInputChange} />

          <input 
              placeholder='Año del producto'
              type="number" 
              className="form-control mb-2" 
              name="productYear"
              value={productYear}
              onChange={onInputChange} />

          <input 
              placeholder='Precio del producto'
              type="number" 
              className="form-control mb-2" 
              name="productPrice"
              value={productPrice}
              onChange={onInputChange} />

          <button onClick={onSubmitForm} className="btn btn-primary mb-2">Crear producto</button>
          <button onClick={ resetForm } className="btn btn-info mb-2">Limpiar Formulario</button>
          <button onClick={() => navigate('/')} className="btn btn-outline-primary">Regresar</button>
        </>
      )}
    </form>
  )
}
