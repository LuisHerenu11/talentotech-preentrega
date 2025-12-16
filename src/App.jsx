import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import Productos from './components/Productos';
import ProductoDetalle from './components/ProductoDetalle';
import RutaProtegida from "./components/RutaProtegida";
import IniciarSesion from "./components/IniciarSesion";
import Pagar from "./components/Pagar";

import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductsContext";
import Dashboard from "./components/Dashboard";
import FormularioProducto from './components/FormularioProducto';
import EliminarProducto from './components/EliminarProducto';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

function App() {
  
  return (
    <div style={{minHeight: '100vh'}}>
      <AuthProvider>
        <CartProvider>
          <ProductsProvider>
            <Header/>
            <Routes>
              <Route path='/' element={<Inicio/>}/>
              <Route path='/productos' element={<Productos/>}/>
              <Route path="/productos/:id" element={<ProductoDetalle />}/>
              <Route path="/iniciar-sesion" element={<IniciarSesion />}/>
              <Route path="/pagar" element={ <RutaProtegida><Pagar/></RutaProtegida>}/>
              <Route path="/dashboard" element={<RutaProtegida soloAdmin={true}><Dashboard/></RutaProtegida>}/>
              <Route path="/formulario-producto" element={<RutaProtegida soloAdmin={true}><FormularioProducto /></RutaProtegida>}/>
              <Route path="/eliminar-producto" element={<RutaProtegida><EliminarProducto /></RutaProtegida>}/>
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer/>
            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              closeOnClick
              draggable
              pauseOnHover
            />
          </ProductsProvider>
        </CartProvider>
      </AuthProvider>
    </div>
  )
}export default App
