import React, { Dispatch, SetStateAction } from "react";

type Props = {
  image: string;
  setIsClose: Dispatch<SetStateAction<boolean>>
  isOpenImage: boolean
};

const PopUpImage = ({ image, setIsClose, isOpenImage }: Props) => {
  return (
    <div className="absolute  z-50 bg-black/20 w-full h-full flex items-center justify-center top-0"
    onClick={() => setIsClose(!isOpenImage)}>
      <div className="relative w-[800px] h-[600px] flex bg-white">
        <span className="absolute top-10 right-6 text-4xl border-yellow-300 border p-2 rounded-full cursor-pointer"
        onClick={() => setIsClose(!isOpenImage)}>X</span>
        <img src={image} alt="" className="w-full h-full object-contain
        " />
      </div>
    </div>
  );
};

export default PopUpImage;
