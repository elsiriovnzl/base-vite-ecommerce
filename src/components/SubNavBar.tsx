import React from "react";

type Props = {};

const SubNavBar = (props: Props) => {
  return (
    <div className=" h-10 flex static justify-around w-full bg-black text-white items-center sm:hidden md:hidden">
      <div className="">OFERTA IZQUIERDA</div>
      <div className="">OFERTA DERECHA</div>
    </div>
  );
};

export default SubNavBar;
