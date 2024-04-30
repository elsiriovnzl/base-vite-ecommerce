import React from "react";

type Props = {
  data: { id: string | number; title: string; price: number; img: string }[];
  code: "Default" | "RankingProduct";
  numViewData: number;
};

const CardGeneric = ({ data, code, numViewData }: Props) => {
  return (
    <div className=" flex flex-col w-[1400px] h-[300px] gap-4 items-center justify-center">
      <div className="w-[80%] h-10">
        <p className="text-xl w-[260px] font-bold border-b-2 border-yellow-400">
          Productos Recomendados
        </p>
      </div>
      <div className="flex gap-10">
        {data.map((view) => (
          <div className=" flex flex-col w-[250px] h-full  shadow-2xl p-2 cursor-pointer rounded-lg
           hover:border-black border xl:w-[180px] lg:w-[140px]  ">
            <img
              src={view.img}
              alt={view.title}
              className="w-full h-[260px] object-cover xl:h-[180px] lg:object-contain"
            />
            <div className="flex items-center justify-between ">
              <p className="text-xl  font-bold lg:text-sm  "> {view.title}</p>
              <p className="text-xl font-bold mr-2 lg:text-sm"> ${view.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGeneric;
