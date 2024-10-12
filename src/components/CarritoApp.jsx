
import { Navigate, Routes, Route } from 'react-router-dom'
import { NavBar } from './NavBar'
import { ProductsPage } from '../pages/ProductsPage'
import { CartPage } from '../pages/CartPage'
import { ProductProvider } from '../context/ProductProvider'

export const CarritoApp = () => {
  return (
    <ProductProvider>
        <NavBar/>
       
       <div>
        <Routes>
            <Route path='/' element={<ProductsPage/>}></Route>
            <Route path='/carrito' element={<CartPage/>}></Route>
            <Route path='/*' element={<Navigate to='/'/>}></Route>
        </Routes>
       </div>
    </ProductProvider>
  )
}
