import { Route, Routes, Navigate } from 'react-router-dom'
import { Home } from '../pages/Home'

export function ClientRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
  )
}
