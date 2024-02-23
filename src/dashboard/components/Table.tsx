import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { deleteProduct } from "../../store/slices/product";
import { Products } from "../interfaces/interfaces"

export const Table = ({products}: {products: Products[]}) => {
    const dispatch = useAppDispatch();
    return (
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                <th scope="col">Nº Producto</th>
                <th scope="col">Nombre Producto</th>
                <th scope="col">Detalle</th>
                <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(({id, name}) => (
                        <tr key={id}>
                            <th scope="row">{id}</th>
                            <td>{name}</td>
                            <td>
                                <Link to={`/product/${id}`} className="btn btn-link">Ir a detalle</Link>
                            </td>
                            <td className="d-flex gap-2">
                                <button type="button" className="btn btn-warning">Actualizar</button>
                                <button type="button" className="btn btn-danger" onClick={() => dispatch(deleteProduct(id))}>Borrar</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
