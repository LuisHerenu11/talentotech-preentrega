import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import Productos from './components/Productos';
import ProductoDetalle from './components/ProductoDetalle';
import { AppProvider } from './context/AppContext'
import RutaProtegida from "./components/RutaProtegida";
import IniciarSesion from "./components/IniciarSesion";
import Pagar from "./components/Pagar";

function App() {
  
  return (
      <AppProvider>
        <div style={{minHeight: '100vh'}}>
          <Header/>
          <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/productos' element={<Productos/>}/>
            <Route path="/productos/:id" element={<ProductoDetalle />}/>
            <Route path="/iniciar-sesion" element={<IniciarSesion />}/>
            <Route path="/pagar" element={ <RutaProtegida><Pagar/></RutaProtegida>}/>
          </Routes>
          <Footer/>
        </div>
      </AppProvider>
  )
}export default App
