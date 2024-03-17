import React, { Dispatch, SetStateAction } from "react";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";

type Props = {
  openCartFn: Dispatch<SetStateAction<boolean>>;
  openCart: boolean;
};

const NavBar = ({ openCart, openCartFn }: Props) => {
  return (
    <div className="flex justify-around w-full m-3">
      <div className="w-[180px] h-[100px]">
        <img
          className="-w-full h-full"
          src="https://i.pinimg.com/originals/b7/25/fb/b725fb67a8f353788f0c5882699b682a.jpg"
          alt=""
        />
      </div>
      <div className="flex gap-10 m-4">
        <ul className="flex gap-10 items-center font-semibold">
          <li className="cursor-pointer text-yellow-300">Inicio</li>
          <li className="cursor-pointer">Productos</li>
          <li className="cursor-pointer">Contacto</li>
        </ul>
        <div className="flex gap-4 items-center">
          <div className="">
            <CgProfile cursor={"pointer"} size={30} />
          </div>
          <div className="relative cursor-pointer" onClick={() => openCartFn(!openCart)}>
            <FiShoppingCart  size={30} />
            <div className="absolute -top-2 -right-3 w-6 h-6 bg-yellow-500 text-center items-center  rounded-full">
              <span className="font-bold select-none">10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
