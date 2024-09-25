//import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Nav from './Nav/Nav';
import Home from './Pages/Home';
import Hero from './Hero/Hero';
import  './Hero/Hero.css';
import Footer from './footer/footer';
import Addproduct from './Component/Product/Addproduct';
import ViewProduct from './Component/Product/ViewProduct';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/hero' element={<Hero/>}/>
        <Route path='/Addproduct' element={<Addproduct/>}/>
        <Route path='/ViewProduct' element={<ViewProduct/>}/>
          
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
