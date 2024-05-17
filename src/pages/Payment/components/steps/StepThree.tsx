import React from "react";
import { FaCheck } from "react-icons/fa";

type Props = {};

const StepThree = (props: Props) => {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center gap-2">
      <FaCheck
        size={120}
        color="green"
        className="rounded-full p-2 border border-green-500"
      />
      <p className="text-green-500 font-bold">Se creo correctamente tu orden</p>
    </div>
  );
};

export default StepThree;
