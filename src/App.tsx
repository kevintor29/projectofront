import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './components/estaticos/home/Home';
import Nossamissao from './components/estaticos/nossamissao/Nossamissao';
import Sobrenos from './components/estaticos/sobrenos/Sobrenos';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';

function App() {
  return (
   <Router>
    <Navbar />
      <Routes>

      <Route path='/' element={<Home />}/>
      <Route path='/nossamissao' element={<Nossamissao />}/>
      <Route path='/sobrenos' element={<Sobrenos />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/cadastro' element={<CadastroUsuario />}/>

      </Routes>
    <Footer />
   </Router>
  );
}

export default App;