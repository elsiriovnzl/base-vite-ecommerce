import React, { MouseEvent, useEffect, useState } from "react";

import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  getOneProduct,
  loadingSingleProduct,
  singleProduct,
} from "../../redux/Products/SingleProduct";
import { addOneSingle } from "../../redux/Products/CartSlice";
import PopUpImage from "./components/PopUpImage";
import { LinearProgress } from "@mui/material";
/* import CardGeneric from "../components/CardGeneric";
import Comments from "../components/Comments"; */

type SingleProductType = {};

const SingleProduct = ({}: SingleProductType) => {
  const { id } = useParams();
  const product = useAppSelector(singleProduct);
  const loading = useAppSelector(loadingSingleProduct);
  const [count, setCount] = useState(1);
  const [viewImage, setViewImage] = useState<string | null>(null);
  const [isOpenImage, setIsOpenImage] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    id && dispatch(getOneProduct(id));
  }, [id]);

  const handleClick = (operation: string, image?: string) => {
    if (operation === "addCart" && id) {
      dispatch(addOneSingle(product, count));
      return;
    }
    count === 1 && setCount((prev) => prev + 1);

    operation === "+"
      ? setCount((prev) => prev + 1)
      : setCount((prev) => prev - 1);

    if (operation === "image" && image) {
      setViewImage(image);
      setIsOpenImage(true);
    }
  };

  return !loading ? (
    <div className="flex w-[100vw] h-auto  items-center justify-center flex-col pt-5  realtive  ">
      <div
        className=" w-[70%]  h-autto p-4 flex items-center justify-center lg:flex-col lg:h-[1100px] 
      md:flex-col md:h-auto  sm:flex-col sm:h-[1000px] gap-2  "
      >
        <div className=" flex flex-col  items-center justify-center   w-full h-full  p-2">
          <img
            src={product?.products_img1}
            alt=""
            className="w-[600px] h-[600px] object-contain sm:object-contain md:object-contain border-4 border-yellow-400 p-10 rounded-xl  "
          />
          <div className="flex h-28 w-full gap-3  items-center justify-between  overflow-hidden md:hidden sm:hidden ">
            <img // IMAGES SECUNDARIES
              src={product?.products_img2}
              alt=""
              className="w-full h-full object-contain shadow-xl p-5 rounded-lg cursor-pointer hover:border border-black"
              onClick={() => handleClick("image", product?.products_img2)}
            />
            <img
              src={product?.products_img3}
              alt=""
              className="w-full h-full object-contain shadow-xl p-5 rounded-lg cursor-pointer hover:border border-black"
              onClick={() => handleClick("image", product?.products_img3)}
            />
            <img
              src={product?.products_img4}
              alt=""
              className="w-full h-full object-contain shadow-xl p-5 rounded-lg cursor-pointer hover:border border-black"
              onClick={() => handleClick("image", product?.products_img4)}
            />
          </div>
        </div>
        {isOpenImage && viewImage && (
          <PopUpImage
            image={viewImage}
            setIsClose={setIsOpenImage}
            isOpenImage={isOpenImage}
          />
        )}
        <div className=" flex h-full w-full p-2 flex-col gap-6 ">
          <div className="flex flex-col gap-2 sm:flex-col">
            <p className="text-2xl font-bold">{product?.products_tiltle} </p>
            <p>{product?.products_description}</p>
          </div>
          <div className="flex m-3 rounded-xl h-full p-2 gap-5 w-full items-center justify-start sm:hidden ">
            <p className="text-2xl"> ${product.products_total}</p>
            <div className="flex flex-col gap-1 ">
              <p>Color</p>
              <div className="flex gap-4  w-10 flex-wrap ">
                <div
                  style={{
                    backgroundColor: `${product.colors_name}`,
                    border: `${
                      product.colors_name === "white"
                        ? "1px solid black"
                        : "none"
                    }`,
                  }}
                  className={`rounded-full h-5 w-5 cursor-pointer `}
                ></div>
              </div>
            </div>

            <div className="flex flex-col gap-1 items-center w-full sm:hidden">
              {/* MAKE: RANKING PRODUCT */}
              {/*  <div className="flex gap-1 items-center">
                  <p className="text-2xl">5.0</p>
                  <FaStar color="yellow" />
                  <FaStar color="yellow" />
                  <FaStar color="yellow" />
                  <FaStar color="yellow" />
                </div> */}
              <p>Inventario ({product?.stock})</p>
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
            <p>Categoria: {product?.categories_name}</p>
            <p>Modelo: cocineitor</p>
            <p>Marca: {product?.brand_name}</p>
          </div>
          <div className="flex w-full items-center h-full justify-center gap-10 l sm:flex-col ">
            <div className="flex flex-1  items-center justify-center gap-5 select-none">
              <div
                className="flex h-10 w-10 rounded-full bg-gray-200 items-center justify-center cursor-pointer"
                onClick={() => handleClick("-")}
              >
                <span>{"<"}</span>
              </div>
              <p className="text-2xl">{count}</p>
              <div
                className="flex h-10 w-10 rounded-full bg-gray-200 items-center justify-center cursor-pointer"
                onClick={() => handleClick("+")}
              >
                <span>{">"}</span>
              </div>
            </div>
            <div className="flex flex-1 justify-center sm:w-full">
              <button
                onClick={() => handleClick("addCart")}
                className="w-full bg-yellow-200 h-12  rounded-lg hover:bg-yellow-400"
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex items-center justify-center w-full h-full md:hidden sm:hidden">
        <CardGeneric data={Data} code="Default" numViewData={4} />
      </div> */}
      {/*  <div className="w-[70%] m-2">
       <Comments/>
      </div> */}
    </div>
  ) : (
    <div className="flex w-[100vw] h-[100vh]  items-center justify-center flex-col pt-[180px]">
      <LinearProgress className="w-[80%] h-full" />
    </div>
  );
};

export default SingleProduct;
