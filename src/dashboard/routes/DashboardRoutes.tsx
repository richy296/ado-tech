import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
import { DashboardPage } from '../pages'
import { ProductDetail } from '../pages/productDetail/ProductDetail'
import { ProductCreate } from '../pages/productCreate/ProductCreate'
import { ProductUpdate } from '../pages/productUpdate/ProductUpdate'

export const DashboardRoutes = () => {

  return (
    <>
        <Navbar />
        <div className='container'>
            <Routes>
                <Route path="products" element={<DashboardPage />}/>
                <Route path="product/:id" element={<ProductDetail />}/>
                <Route path="product/create" element={<ProductCreate />}/>
                <Route path="product/update/:id" element={<ProductUpdate />}/>
                
                <Route path="/" element={<Navigate to="/products" />} />
            </Routes>
        </div>
        
    </>
  )
}
