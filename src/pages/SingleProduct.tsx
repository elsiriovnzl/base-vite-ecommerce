import React from "react";

import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import Footer from "../components/Footer";
import CardGeneric from "../components/CardGeneric";
import Comments from "../components/Comments";

const SingleProduct = () => {
  const Data = [
    {
      id: 1,
      title: "Hornilla 1",
      price: 300,
      img: "https://www.salcarve.com/wp-content/uploads/2022/05/COCINA-BLANCA-2-HORNILLAS.png",
    },
    {
      id: 2,
      title: "Hornilla 2",
      price: 300,
      img: "https://www.salcarve.com/wp-content/uploads/2022/05/COCINA-BLANCA-2-HORNILLAS.png",
    },
    {
      id: 3,
      title: "Hornilla 3",
      price: 300,
      img: "https://www.salcarve.com/wp-content/uploads/2022/05/COCINA-BLANCA-2-HORNILLAS.png",
    },
    {
      id: 4,
      title: "Hornilla 4",
      price: 300,
      img: "https://www.salcarve.com/wp-content/uploads/2022/05/COCINA-BLANCA-2-HORNILLAS.png",
    },
  ];

  return (
    <div className="flex w-[100vw] h-full  items-center justify-center flex-col pt-[180px] gap-16 ">
      <div className=" w-[70%] h-[550px] flex items-center justify-center lg:flex-col lg:h-[1100px] 
      md:flex-col md:h-auto  sm:flex-col sm:h-[1000px] gap-2  ">
        <div className="flex-1 flex items-center justify-center  h-full w-full">
          <div className="h-full w-full p-3 border-gray-400 border rounded-xl">
            <img
              src={
                "https://www.salcarve.com/wp-content/uploads/2022/05/COCINA-BLANCA-2-HORNILLAS.png"
              }
              alt=""
              className="w-full h-[400px]  object-contain sm:object-contain md:object-contain  "
            />
            <div className="flex h-28 w-full gap-3  items-center justify-between  overflow-hidden md:hidden sm:hidden ">
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
        <div className="flex-1 flex h-full w-full p-2 flex-col gap-6 ">
          <div className="flex flex-col gap-2 sm:flex-col">
            <p className="text-2xl font-bold">2 HORNILLA SALCAR ELECTRICA </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              enim vel repellendus quo tempora, id soluta repellat! Minus
              exercitationem nostrum commodi ut est a quis obcaecati repudiandae
              voluptatem consequuntur
            </p>
          </div>
          <div className="flex m-3 rounded-xl h-24 p-2 gap-5 w-full items-center sm:hidden ">
            {/* COLOR */}
            <div className="flex flex-col gap-1 ">
              <p>Color</p>
              <div className="flex gap-4  w-32 flex-wrap ">
                <div className="rounded-full h-5 w-5 bg-blue-500 cursor-pointer"></div>
                <div className="rounded-full h-5 w-5 bg-green-500 cursor-pointer"></div>
                <div className="rounded-full h-5 w-5 bg-black cursor-pointer"></div>
                <div className="rounded-full h-5 w-5 bg-black cursor-pointer"></div>
                <div className="rounded-full h-5 w-5 bg-black cursor-pointer"></div>
                <div className="rounded-full h-5 w-5 bg-black cursor-pointer"></div>
              </div>
            </div>

            <div className="flex flex-col gap-1 items-center w-full sm:hidden">
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
            <div className="flex flex-col  gap-2 md:hidden ">
              <div className="flex gap-1 items-center justify-center   rounded-xl w-[130px] h-10  bg-gray-200">
                <TbTruckDelivery size={25} /> <p>Despacho</p>
              </div>
              <div className="flex gap-1 items-center justify-center   rounded-xl w-[150px] h-10  bg-gray-200">
                <FaMapMarkerAlt />
                <p>Retiro en tienda</p>
              </div>
            </div>
          </div>
          <div className="w-full shadow-lg h-10 flex items-center justify-between p-2  md:hidden sm:hidden ">
            <p>Categoria: Linea Blanca</p>
            <p>Modelo: cocineitor</p>
            <p>Marca: elsirioChino</p>
          </div>
          <div className="flex w-full items-center h-full justify-center gap-10 l sm:flex-col ">
            <div className="flex flex-1  items-center justify-center gap-5">
              <div className="flex h-10 w-10 rounded-full bg-gray-200 items-center justify-center cursor-pointer">
                <span>{"<"}</span>
              </div>
              <p className="text-2xl">1</p>
              <div className="flex h-10 w-10 rounded-full bg-gray-200 items-center justify-center cursor-pointer">
                <span>{">"}</span>
              </div>
            </div>
            <div className="flex flex-1 justify-center sm:w-full">
              <button className="w-full bg-yellow-200 h-12  rounded-lg hover:bg-yellow-400">
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-full md:hidden sm:hidden">
        <CardGeneric data={Data} code="Default" numViewData={4} />
      </div>
      <div className="w-[70%] m-2">
       <Comments/>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProduct;
