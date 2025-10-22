import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import Productos from './components/Productos';
import ProductoDetalle from './components/ProductoDetalle';

function App() {
  
  return (
      <div>
        <Header/>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/productos' element={<Productos/>}/>
          <Route path="/productos/:id" element={<ProductoDetalle />} />
        </Routes>
        <Footer/>
      </div>
  )
}export default App
