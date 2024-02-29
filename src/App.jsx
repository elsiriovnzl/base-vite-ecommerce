import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import Payment from "./pages/Payment";

function App() {


  return (
    <div className="w-[100vw] h-[100vh] flex overflow-y-auto  justify-center">
       <Routes>
         <Route path="/" index element={<Home/>}/>
         <Route path="/Inicio" index element={<Login/>}/>
         <Route path="/Registro" index element={<Register/>}/>
         <Route path="/Productos" index element={<Products/>}/>
         <Route path="/Perfil" index element={<Profile/>}/>
         <Route path="/Pago" index element={<Payment/>}/>
      </Routes>
    </div>
  )
}

export default App
