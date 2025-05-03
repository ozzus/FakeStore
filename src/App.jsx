import { Routes, Route } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import ProductPage from './pages/ProductPage'
import NotFoundPage from './pages/NotFoundPage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/" element={<ProductsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App