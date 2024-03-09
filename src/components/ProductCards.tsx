import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { ProductsProps } from "../pages/Home";


interface ProductCardProps {
    name: string;
    description: string;
    category: string;
    price: number;
    quantity: number;
    brand: string;
    rating: number;
    color: string;
    size: string;
    img: string;
}

const ProductCards = ({name ,description,category,price,quantity,brand,rating,color,size,img}: ProductCardProps) => {


  return (
    <div className="h-[450px] w-[290px] shadow-lg flex flex-col ">
      <div className="flex-1 ">
        <img
          src={img}
          alt=""
          className="h-full object-contain w-full"
        />
      </div>
      <div className="flex flex-col  h-[150px] gap-2 p-2 ">
        <div className="flex ">
          <AiOutlineStar className="text-gray-400 " />
          <AiFillStar className="text-yellow-300" />
          <AiFillStar className="text-yellow-300" />
          <AiFillStar className="text-yellow-300" />
          <AiFillStar className="text-yellow-300" />
        </div>
        <div className="h-full w-full  text-ellipsis  overflow-hidden ">
          <div className="font-semibold text-gray-600">{name}</div>
          <div className="font-italic text-sm text-gray-600    ">
           <p className="text-ellipsis " >{description}</p>  
          </div>
        </div>
        <div className="flex w-full items-center justify-between ">
          <div className="price">
            <b>${price}</b>
          </div>
          <div className="button">
            <button className="bg-yellow-300  p-2 text-sm rounded-md text-gray-600 hover:text-gray-800 hover:bg-yellow-500">
              Agregar al carro
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
