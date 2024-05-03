import React from "react";

type Props = {};

const Slider = (props: Props) => {
  return (
    <div className=" h-[350px]  w-full flex items-center   ">
      <div className="flex w-full h-[350px] relative  ">
        <img
          className="w-full h-full object-cover "
          src="https://static.vecteezy.com/system/resources/previews/001/311/141/original/abstract-black-grunge-banner-background-free-vector.jpg"
          alt=""
        />
        <span className="absolute w-full h-full  bg-gradient-to-r from-transparent to-black"></span>
        <div className="absolute right-[200px] top-5  h-96 w-[70%] flex  items-center justify-center lg:right-[50px] ">
          <img
            className=" w-[600px] h-[250px] object-cover lg:hidden  "
            src="https://www.pngall.com/wp-content/uploads/5/Full-HD-LED-TV-PNG-Clipart.png"
            alt=""
          />
          <div className="flex flex-col items-center justify-between w-full gap-10 text-center">
            <h1 className="text-2xl text-white">
              SLIDER DE COMPRAS AHORA MISMO
            </h1>
            <button className=" rounded-xl w-72 h-10 border-2 border-white text-white ">
              Compra ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
