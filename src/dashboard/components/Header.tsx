import { useAppDispatch } from "../../hooks/useAppDispatch";
import { createProduct } from "../../store/slices/product";

export const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <>
        <section className="d-flex justify-content-between mt-4">
            <h1>Productos</h1>
            <button type="button" className="btn btn-primary" onClick={() => dispatch(createProduct())}>Crear Producto</button>
        </section>
        <hr />
    </>
  )
}
