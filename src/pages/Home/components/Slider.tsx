import React, { useState } from "react";

type Props = {};

const Slider = (props: Props) => {

 
    const [dni, setDni] = useState('');

  return (
    <div className=" h-[350px]  w-full flex items-center   ">
      <div className="flex w-full h-[350px] relative  ">
        <img
          className="w-full h-full object-cover "
          src="https://png.pngtree.com/thumb_back/fw800/back_pic/03/93/99/8257e7bbd63b3ff.jpg"
          alt=""
        />
        <span className="absolute w-full h-full  bg-gradient-to-r from-transparent to-black/20"></span>
        <div className="absolute right-[200px] top-0  h-96 w-[70%] flex  items-center justify-center lg:right-[50px] ">
          <img
            className=" w-[600px] h-[300px] object-cover lg:hidden  "
            src="https://www.pngall.com/wp-content/uploads/5/Full-HD-LED-TV-PNG-Clipart.png"
            alt=""
          />
          <div className="flex flex-col items-center justify-between w-full gap-10 text-center">
            
            <form>
              <input 
              className="text-center"
              type="text"
              value={dni}
              onChange={(event) => setDni(event.target.value)}
              placeholder="D.N.I"
              required
              />
              <button className="rounded-xl w-40 h-30 border-2 border-white text-white " type="submit">Revisar Pagos</button>
            </form>
            {/* <button className=" rounded-xl w-72 h-10 border-2 border-white text-white ">
              Compra ahora
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
