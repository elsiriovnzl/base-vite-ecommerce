import React from "react";

const Profile = () => {
  
  return (
    <>
      <div className="text-center pt-[210px] border-gray-400">
        <h1 className="text-black text-3xl border">Mis Ordenes</h1>
      </div>

      <div className="w-[100vw] h-full pt-[100px] flex ">
        <div className="flex flex-col items-start p-10 space-y-7 border-2 border-gray-400">
          <button className=" bg-yellow-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
            Mis Ordenes
          </button>
          <button className="w-full bg-yellow-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ">
            Configuración
          </button>
        </div>
        <div className="flex flex-col items-start p-10 space-y-7 border-2 border-gray-400 w-full">
        <div className="flex w-full border">
    <div className="flex-1 p-4 ">
        <span className="mr-2">3</span> -  
        <span className="mr-2">Zapatillas</span> - 
        <span className="mr-2">$80</span> - 
        <span>12 cuotas</span>
    </div>
    <div className="flex-1 p-4">
        <label className="inline-flex items-center mr-4">
            <input type="checkbox" checked  className="form-checkbox text-green-600 w-5 h-5"/>
            <span className="ml-2">Verificacion</span>
        </label>
        <label className="inline-flex items-center mr-4">
            <input type="checkbox"  className="form-checkbox text-green-600 w-5 h-5"/>
            <span className="ml-2">Bodega</span>
        </label>
        <label className="inline-flex items-center mr-4">
            <input type="checkbox"  className="form-checkbox text-green-600 w-5 h-5"/>
            <span className="ml-2">Despacho</span>
        </label>
        <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox text-green-600 w-5 h-5"/>
            <span className="ml-2">Entrega</span>
        </label>
    </div>
</div>
<div className="flex w-full border">
    <div className="flex-1 p-4 ">
        <span className="mr-2">3</span> -  
        <span className="mr-2">Zapatillas</span> - 
        <span className="mr-2">$80</span> - 
        <span>12 cuotas</span>
    </div>
    <div className="flex-1 p-4">
        <label className="inline-flex items-center mr-4">
            <input type="checkbox" checked  className="form-checkbox text-green-600 w-5 h-5"/>
            <span className="ml-2">Verificacion</span>
        </label>
        <label className="inline-flex items-center mr-4">
            <input type="checkbox"  className="form-checkbox text-green-600 w-5 h-5"/>
            <span className="ml-2">Bodega</span>
        </label>
        <label className="inline-flex items-center mr-4">
            <input type="checkbox"  className="form-checkbox text-green-600 w-5 h-5"/>
            <span className="ml-2">Despacho</span>
        </label>
        <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox text-green-600 w-5 h-5"/>
            <span className="ml-2">Entrega</span>
        </label>
    </div>
    </div>
</div>
      </div>
    </>
  );
};

export default Profile;
