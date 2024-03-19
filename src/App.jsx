import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import Payment from "./pages/Payment";
import SubNavBar from "./components/SubNavBar";
import NavBar from "./components/NavBar";
import SliderCart from "./components/SliderCart";

function App() {
  const [openCart, setopenCart] = useState(false);
  let user = true;

  return user ? (
    <div className="w-[100vw] h-[100vh] flex flex-col overflow-y-auto  justify-center">
      <SubNavBar />
      {openCart && <SliderCart />}
      <NavBar openCartFn={setopenCart} openCart={openCart} />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/Productos" index element={<Products />} />
        <Route path="/Perfil" index element={<Profile />} />
        <Route path="/Pago" index element={<Payment />} />
      </Routes>
    </div>
  ) : (
    <Routes>
      <Route path="/" index element={<Login />} />
      <Route path="/Registro" index element={<Register />} />
    </Routes>
  );
}

export default App;
