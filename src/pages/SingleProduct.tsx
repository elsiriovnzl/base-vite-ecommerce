import React from "react";

import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import Footer from "../components/Footer";

const SingleProduct = () => {
  return (
    <div className="flex w-[100vw] h-full  items-center justify-center flex-col pt-[150px] gap-10 ">
      <div className=" w-[70%] h-[550px] flex items-center justify-center  ">
        <div className="flex-1 flex items-center justify-center  h-full ">
          <div className="h-full w-full p-3">
            <img
              src={
                "https://www.salcarve.com/wp-content/uploads/2022/05/COCINA-BLANCA-2-HORNILLAS.png"
              }
              alt=""
              className="w-full h-[400px] object-cover"
            />
            <div className="flex h-28 w-full gap-3 items-center justify-between">
                {/* IMAGES SECUNDARIES */}
              <img
                src={
                  "https://www.salcarve.com/wp-content/uploads/2022/05/COCINA-BLANCA-2-HORNILLAS.png"
                }
                alt=""
                className="w-full h-full object-cover shadow-xl p-5 rounded-lg cursor-pointer hover:border border-black"
              />
              <img
                src={
                  "https://www.salcarve.com/wp-content/uploads/2022/05/COCINA-BLANCA-2-HORNILLAS.png"
                }
                alt=""
                className="w-full h-full object-cover shadow-xl p-5 rounded-lg cursor-pointer hover:border border-black"
              />
              <img
                src={
                  "https://www.salcarve.com/wp-content/uploads/2022/05/COCINA-BLANCA-2-HORNILLAS.png"
                }
                alt=""
                className="w-full h-full object-cover shadow-xl p-5 rounded-lg cursor-pointer hover:border border-black"
              />
              <img
                src={
                  "https://www.salcarve.com/wp-content/uploads/2022/05/COCINA-BLANCA-2-HORNILLAS.png"
                }
                alt=""
                className="w-full h-full object-cover shadow-xl p-5 rounded-lg cursor-pointer hover:border border-black"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 flex h-full w-full p-2 flex-col ">
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-bold">2 HORNILLA SALCAR ELECTRICA </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              enim vel repellendus quo tempora, id soluta repellat! Minus
              exercitationem nostrum commodi ut est a quis obcaecati repudiandae
              voluptatem consequuntur
            </p>
          </div>
          <div className="flex m-3 rounded-xl h-24 p-2 gap-5 w-full items-center">
            {/* COLOR */}
            <div className="flex flex-col gap-1 ">
              <p>Color</p>
              <div className="flex gap-4  w-32 flex-wrap">
                <div className="rounded-full h-5 w-5 bg-blue-500 cursor-pointer"></div>
                <div className="rounded-full h-5 w-5 bg-green-500 cursor-pointer"></div>
                <div className="rounded-full h-5 w-5 bg-black cursor-pointer"></div>
                <div className="rounded-full h-5 w-5 bg-black cursor-pointer"></div>
                <div className="rounded-full h-5 w-5 bg-black cursor-pointer"></div>
                <div className="rounded-full h-5 w-5 bg-black cursor-pointer"></div>
              </div>
            </div>

            <div className="flex flex-col gap-1 items-center w-full">
              <div className="flex gap-1 items-center">
                <p className="text-2xl">5.0</p>
                <FaStar color="yellow" />
                <FaStar color="yellow" />
                <FaStar color="yellow" />
                <FaStar color="yellow" />{" "}
              </div>
              <p>Inventario (1)</p>
              <p>Reseñas (3)</p>
            </div>
            {/* INFO WITHDRAWAL */}
            <div className="flex flex-col  gap-2">
              <div className="flex gap-1 items-center justify-center   rounded-xl w-[130px] h-10  bg-gray-200">
                <TbTruckDelivery size={25} /> <p>Despacho</p>
              </div>
              <div className="flex gap-1 items-center justify-center   rounded-xl w-[150px] h-10  bg-gray-200">
                <FaMapMarkerAlt />
                <p>Retiro en tienda</p>
              </div>
            </div>
          </div>
          <div className="w-full shadow-lg h-10 flex items-center justify-between p-2">
            <p>Categoria: Linea Blanca</p>
            <p>Modelo: cocineitor</p>
            <p>Marca: elsirioChino</p>
          </div>
          <div className="flex w-full items-center h-full justify-center">
            <div className="flex flex-1  items-center justify-center gap-5">
              <div className="flex h-10 w-10 rounded-full bg-gray-200 items-center justify-center cursor-pointer">
                <span>{"<"}</span>
              </div>
              <p className="text-2xl">1</p>
              <div className="flex h-10 w-10 rounded-full bg-gray-200 items-center justify-center cursor-pointer">
                <span>{">"}</span>
              </div>
            </div>
            <div className="flex flex-1 justify-center">
              <button className="w-full bg-yellow-200 h-10 rounded-lg hover:bg-yellow-400">
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[70%] m-2">
        <div className="flex flex-col">
          <div className="">Comentarios</div>
          <div className="flex  w-full h-full flex-col">
            {/* MAKE: CHANGE COMMENTS SLICE*/}
            <div className="  w-full p-4 rounded-xl shadow-xl">
              <div className="flex gap-20 w-full items-center justify-between">
                <div className="">
                  <p>Henry Carrillo</p>
                </div>
                <div className="">
                  <p>hace {new Date().getMinutes()} minutos</p>
                </div>
              </div>
              <div className="flex gap-2">
                <p>Muy buen producto</p>
                <p>
                  <FaStar />
                </p>
                <p>
                  <FaStar />
                </p>
                <p>
                  <FaStar />
                </p>
              </div>
            </div>
            <div className="  w-full p-4 rounded-xl shadow-xl">
              <div className="flex gap-20 w-full items-center justify-between">
                <div className="">
                  <p>Henry Carrillo</p>
                </div>
                <div className="">
                  <p>hace {new Date().getMinutes()} minutos</p>
                </div>
              </div>
              <div className="flex gap-2">
                <p>Muy buen producto</p>
                <p>
                  <FaStar />
                </p>
                <p>
                  <FaStar />
                </p>
                <p>
                  <FaStar />
                </p>
              </div>
            </div>
            <div className="  w-full p-4 rounded-xl shadow-xl">
              <div className="flex gap-20 w-full items-center justify-between">
                <div className="">
                  <p>Henry Carrillo</p>
                </div>
                <div className="">
                  <p>hace {new Date().getMinutes()} minutos</p>
                </div>
              </div>
              <div className="flex gap-2">
                <p>Muy buen producto</p>
                <p>
                  <FaStar />
                </p>
                <p>
                  <FaStar />
                </p>
                <p>
                  <FaStar />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProduct;
