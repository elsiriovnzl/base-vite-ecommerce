import React from "react";
import { FaStar } from "react-icons/fa";

type Props = {};

const Comments = (props: Props) => {
  return (
    <div>
      <div className="flex flex-col gap-10 select-none h-full">
        <div className="flex shadow-xl h-full w-full">
          <div className="flex-1 w-full m-2 h-full">
            <textarea
              cols={30}
              rows={10}
              placeholder="Comenta tu producto favorito"
              className="w-full h-[150px] border-gray-300 border p-2"
            ></textarea>
          </div>
          <div className="flex w-[150px] md:w-[80px] sm:w-[60px] h-auto  bg-gray-300 m-2 rounded-xl items-center justify-center text-center cursor-pointer hover:bg-gray-500 hover:text-white">
            <p className="sm:text-[10px] md:text-[13px]  font-bold">Agregar comentario</p>
          </div>
        </div>
        <div className="w-[120px]">
          <p className="text-2xl  border-b-2 border-yellow-400">Comentarios</p>
        </div>
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
  );
};

export default Comments;
