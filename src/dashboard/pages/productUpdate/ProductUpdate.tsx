import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/useAppDispatch";
import { RootState } from "../../../store";
import { getProduct, updateProduct } from "../../../store/slices/product";
import { Spinner } from "../../components";
import { ProductData } from "../../interfaces/interfaces";
import { useEffect, useState } from "react";

const initialState = {
  productName: '',
  productYear: '',
  productPrice: 0
} satisfies ProductData as ProductData

export const ProductUpdate = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {isLoading, product} = useAppSelector((state: RootState) => state.products);
  const [formState, setFormState] = useState(initialState);
  const {productName, productYear, productPrice} = formState;

  const onSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(updateProduct({id, productName, productYear, productPrice}));
  }

  const onInputChange = ({target} : React.ChangeEvent<HTMLInputElement> ) => {
    const {value, name} = target;
    
    setFormState({
        ...formState,
        [name]: value
    })
}

  useEffect(() => {
      if (id) {
          dispatch(getProduct(id));
      } else {
          <Navigate to="/" />
      }
  }, [dispatch, id]);

  useEffect(() => {
    if (product) {
      setFormState({
        productName: product.name,
        productYear: product.data.year,
        productPrice: product.data.price
      })
    }
  }, [product])

  return (
    <form className="row mt-5">
      <h1>Actualizar Producto</h1>
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

          <button onClick={onSubmitForm} className="btn btn-primary mb-2">Actualizar usuario</button>
          <button onClick={() => navigate('/')} className="btn btn-outline-primary">Regresar</button>
        </>
      )}
    </form>
  )
}
