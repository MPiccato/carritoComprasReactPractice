
import { Navigate, Routes, Route } from 'react-router-dom'
import { NavBar } from './NavBar'
import { ProductsPage } from '../pages/ProductsPage'
import { CartPage } from '../pages/CartPage'

export const CarritoApp = () => {
  return (
    <>
        <NavBar/>
       
       <div>
        <Routes>
            <Route path='/' element={<ProductsPage/>}></Route>
            <Route path='/carrito' element={<CartPage/>}></Route>
            <Route path='/*' element={<Navigate to='/'/>}></Route>
        </Routes>
       </div>
    </>
  )
}
