import React, { useState } from 'react';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Cart from './Components/Cart';
import Orders from './Components/Orders';
import FarmerHome from './Farmer/FarmerHome';
import AddProduct from './Farmer/AddProduct';


function App() {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem('userdata')))

  return (
    <BrowserRouter>
      {/* public */}
      {auth == null ? (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="" element={<Header />} />
            <Route path="" element={<Footer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />

          </Routes>

        </>
        // admin
      ) : auth.userStatus == 0 ? (

        ""
        // farmer
      ) : auth.userStatus == 2 ? (
        <>
          <Routes>
            <Route path="" element={<Header />} />
            <Route path="" element={<Footer />} />
            <Route path="/" element={<FarmerHome/>}></Route>
            <Route path="/addproduct" element={<AddProduct/>}/>
          </Routes>
        </>
        // user
      ) : (
        ""
      )}
    </BrowserRouter>
  );
}

export default App;
