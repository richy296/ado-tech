import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
import { DashboardPage } from '../pages'
import { ProductDetail } from '../pages/productDetail/ProductDetail'

export const DashboardRoutes = () => {

  return (
    <>
        <Navbar />
        <div className='container'>
            <Routes>
                <Route path="dashboard" element={<DashboardPage />}/>
                <Route path="product/:id" element={<ProductDetail />}/>
                
                <Route path="/" element={<Navigate to="/dashboard" />} />
            </Routes>
        </div>
        
    </>
  )
}
