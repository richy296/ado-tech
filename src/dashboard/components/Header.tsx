import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <>
        <section className="d-flex justify-content-between mt-4">
            <h1>Productos</h1>
            <button type="button" className="btn btn-primary" onClick={() => navigate('/product/create')}>Crear Producto</button>
        </section>
        <hr />
    </>
  )
}
