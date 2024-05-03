import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Products from "./pages/Products/Products";
import Profile from "./pages/Profile/Profile";
import Payment from "./pages/Payment/Payment";
/* import SubNavBar from "./components/SubNavBar"; */
import NavBar from "./components/NavBar";
import SliderCart from "./components/SliderCart";
import SingleProduct from "./pages/SingleProducts/SingleProduct";
import Footer from "./components/Footer";

function App() {
  const [openCart, setopenCart] = useState(false);

  return (
    <div className="w-[100vw]  h-auto  flex flex-col overflow-y-auto overflow-hidden justify-center  ">
      {/*  <SubNavBar /> */}

      <NavBar openCartFn={setopenCart} openCart={openCart} />

      {openCart && <SliderCart />}

      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/Productos" index element={<Products />} />
        <Route path="/Productos/:id" index element={<SingleProduct />} />
        <Route path="/Perfil" index element={<Profile />} />
        <Route path="/Pago" index element={<Payment />} />
        <Route path="/Inicio" index element={<Login />} />
        <Route path="/Registro" index element={<Register />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
