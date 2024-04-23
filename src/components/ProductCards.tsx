import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useAppDispatch } from "../hooks";
import { postProductInCart } from "../redux/Products/CartSlice";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  category?: number;
  price: number;
  quantity: number;
  brand?: string;
  rating?: number;
  color?: number;
  size?: string;
  img: string;
}

const ProductCards = ({
  id,
  name,
  description,
  category,
  price,
  quantity,
  brand,
  rating,
  color,
  size,
  img,
}: ProductCardProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="h-[450px] w-[290px] shadow-lg flex flex-col ">
      <div className="flex-1 items-center justify-center ">
        <img
          src={img}
          alt=""
          className="h-64  object-contain w-full"
          loading="lazy"
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
            <p className="text-ellipsis ">{description}</p>
          </div>
        </div>
        <div className="flex w-full items-center justify-between ">
          <div className="price">
            <b>${price}</b>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() =>
                dispatch(
                  postProductInCart({
                    products_id: id,
                    products_total: price,
                    products_img1: img,
                    products_tiltle: name,
                    products_description: description,
                    stock: 1,
                    quantity: 1,
                  })
                )
              }
              className="bg-yellow-300  p-2 text-sm rounded-md text-gray-600 hover:text-gray-800 hover:bg-yellow-500"
            >
              Agregar al carro
            </button>
            <Link to={`/Productos/${id}`}>
              <button className="bg-yellow-300 flex gap-2 p-2 text-sm rounded-md text-gray-600 hover:text-gray-800 hover:bg-yellow-500">
                Ver
                <FaEye size={20} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
