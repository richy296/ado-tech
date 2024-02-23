import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/useAppDispatch";
import { useEffect } from "react";
import { getProduct } from "../../../store/slices/product";
import { RootState } from "../../../store";
import { Spinner } from "../../components";

export const ProductDetail = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const {isLoading, product} = useAppSelector((state: RootState) => state.products);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (id) {
            dispatch(getProduct(id));
        } else {
            <Navigate to="/" />
        }
    }, [dispatch, id]);

  return (
    <div className="row mt-5">
        { 
            isLoading ?
            <Spinner /> :
            <>
                <div className="col-4">
                    <img src="https://media.istockphoto.com/id/1440149723/es/foto/hombre-feliz-tel%C3%A9fono-de-redes-sociales-y-sala-de-estar-relajarse-escribir-tel%C3%A9fono.jpg?s=2048x2048&w=is&k=20&c=6sDsmsXcOSGXJiGguUhj4oroUZ_wn_p4GXGv9Sw9fmU=" alt="Test Image" className="img-thumbnail animate__animated animate__fadeInLeft" />  
                </div>  

                <div className="col-8  animate__animated animate__fadeInRight">
                    <h3>{product.name}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>Precio:</b> {product.data.price ? product.data.price : 'No disponible'}</li>
                        <li className="list-group-item"><b>Año:</b> {product.data.year ? product.data.year : 'No disponible'}</li>
                        <li className="list-group-item"><b>Color:</b> {product.data.color ? product.data.color : 'No disponible'}</li>
                    </ul>

                    <button onClick={() => navigate('/')} className="btn btn-outline-primary">
                        Regresar
                    </button>
                </div>
            </>
        }
    </div>
  )
}
