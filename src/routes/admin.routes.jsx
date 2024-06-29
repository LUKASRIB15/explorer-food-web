import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Product } from "../pages/Product";
import { Navigate } from "react-router-dom";
import { AddProduct } from "../pages/AddProduct";
import { EditProduct } from "../pages/EditProduct";

export function AdminRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/product/:id' element={<Product />} />
      <Route path='/new-product' element={<AddProduct />} />
      <Route path="/edit-product/:id" element={<EditProduct />}/>
      <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
  )
}