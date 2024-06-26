import { Route, Routes, Navigate } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Product } from '../pages/Product'

export function ClientRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/product/:id' element={<Product />} />
      <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
  )
}
