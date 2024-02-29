import React from "react";

type Props = {};

const SubNavBar = (props: Props) => {
  return (
    <div className=" h-10 flex justify-around w-full bg-black text-white items-center ">
      <div className="">OFERTA IZQUIERDA</div>
      <div className="">OFERTA DERECHA</div>
    </div>
  );
};

export default SubNavBar;
