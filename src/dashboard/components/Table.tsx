import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { deleteProduct } from "../../store/slices/product";
import { Products } from "../interfaces/interfaces"
import { useEffect, useState } from "react";

const ITEMS_PER_PAGE = 3;

export const Table = ({products}: {products: Products[]}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [newProducts, setNewProducts] = useState(products);
    const [currentPage, setCurrentPage] = useState(0);

    const prevHandler = () => {
        const prevPage = currentPage - 1;
        if (prevPage < 0) return;

        const firstIndex = prevPage * ITEMS_PER_PAGE;
        setNewProducts([...products].splice(firstIndex, ITEMS_PER_PAGE));
        setCurrentPage(prevPage)
    }

    const nextHandler = () => {
        const totalElements = products.length;
        const nextPage = currentPage + 1;
        const firstIndex = nextPage * ITEMS_PER_PAGE;

        if (firstIndex >= totalElements) return;
        setNewProducts([...products].splice(firstIndex, ITEMS_PER_PAGE));
        setCurrentPage(nextPage)
    }

    useEffect(() => {
        setNewProducts([...products].splice(0, ITEMS_PER_PAGE))
    }, [products])

    return (
        <>  
            <span className="mb-1">Pagina: {currentPage}</span>
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
                        newProducts.map(({id, name}) => (
                            <tr key={id}>
                                <th scope="row">{id}</th>
                                <td>{name}</td>
                                <td>
                                    <Link to={`/product/${id}`} className="btn btn-link">Ir a detalle</Link>
                                </td>
                                <td className="d-flex gap-2">
                                    <button type="button" className="btn btn-warning" onClick={() => navigate(`/product/update/${id}`)}>Actualizar</button>
                                    <button type="button" className="btn btn-danger" onClick={() => dispatch(deleteProduct(id))}>Borrar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="d-flex gap-3">
                <button className="btn btn-primary" onClick={prevHandler}>Anterior</button>
                <button className="btn btn-primary" onClick={nextHandler}>Siguiente</button>
            </div>
        </>
        
    )
}
