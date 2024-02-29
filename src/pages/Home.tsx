import React from "react";
import SubNavBar from "../components/SubNavBar";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";

const Home = () => {
  return (
    /* CONTAINER */
    <div className="w-full flex flex-col  ">
      <div className="  flex flex-col ">
        <SubNavBar />
        <NavBar />
      </div>
      <Slider />
      {/* INFO BUY  */}
      <div className="INFOBUY flex gap-2">
        INFO DE COMPRA
        <div className="CARDS">CATARS</div>
        <div className="CARDS">CATARS</div>
        <div className="CARDS">CATARS</div>
      </div>

      {/* PRODUCTS OFFERT SELLERS */}
      <div className="PRUDCTS SELERS flex gap-2">
        <div className="CARDS">CATARS</div>
        <div className="CARDS">CATARS</div>
        <div className="CARDS">CATARS</div>
      </div>

      <div className="CONTENEDOR DE PRODUCTS">
        <div className="TITULOS"></div>
        <div className="SUBCONTENEDOR PRODUCTOS ">
          <div className="PRODUCTO">
            <div className="">
              <img src="" alt="" />
            </div>
            <div className="">titulo</div>
            <div className="">precio</div>
            <div className="">Agregar al carrito</div>
            <div className="">Ver</div>
          </div>
        </div>
      </div>
    </div>
    /* CONTAINER */
  );
};

export default Home;
